
STIXPatternListener = require("./STIXPatternListener").STIXPatternListener;

class InspectionError extends Error {
    constructor( message ) {
        super( message );
        this.name = "InspectionError";
    }
}

var _patternData = null;

// This symbol represents a "star" array index step in an object path.
INDEX_STAR = Symbol();

/**
 * Converts the StringLiteral token to a plain string.
 * Gets text content, removes quote characters, and unescapes it.
 * @param {StringLiteral} stringLiteralToken The token
 * @returns {string} The string value.
 */
function stringLiteralToString( stringLiteralToken ) {
    let tokenText = stringLiteralToken.getText();
    return tokenText.slice(1,-1).replace(/\\'/, "'").replace(/\\\\/, "\\");
}

/** This listener collects info about a pattern and puts it
 * into a JavaScript object. It is intended to assist apps
 * which wish to look "inside" a pattern and know what's in there.
 */
class InspectionListener extends STIXPatternListener {
    constructor() {
        super();
        this._comparisonData = {};
        this._qualifiers = new Set();
        this._observationOps = new Set();
        this._objType = null;
        this._objPath = null;
    }

    patternData() {
        return {
            comparisons: this._comparisonData,
            observation_ops: this._observationOps,
            qualifiers: this._qualifiers
        }
    }

    /** @private */
    _addPropTuple(objType, objPath, op, value) {
        if ( !( objType in this._comparisonData ) ) {
            this._comparisonData[ objType ] = [];
        }
        this._comparisonData[ objType ].push([objPath, op, value]);
    }

    exitObservationExpressions( ctx ) {
        if ( ctx.FOLLOWEDBY() ) {
            this._observationOps.add("FOLLOWEDBY");
        }
    }

    exitObservationExpressionOr(ctx) {
        if ( ctx.OR() ) {
            this._observationOps.add("OR");
        }
    }

    exitObservationExpressionAnd(ctx) {
        if ( ctx.AND() ) {
            this._observationOps.add("AND");
        }
    }

    exitStartStopQualifier(ctx) {
        this._qualifiers.add(
            `START ${ctx.StringLiteral(0)} STOP ${ctx.StringLiteral(1)}`
        );
    }

    exitWithinQualifier(ctx) {
        this._qualifiers.add(
            `WTIHIN ${ctx.IntPosLiteral() || ctx.FloatPosLiteral()} SECONDS`
        );
    }

    exitRepeatedQualifier(ctx) {
        this._qualifiers.add(
            `REPEATS ${ctx.IntPosLiteral()} TIMES`
        );
    }

    exitPropTestEqual(ctx) {
        let opTok = ctx.EQ() || ctx.NEQ();
        let opStr = ctx.NOT() ? "NOT " : "";
        opStr += opTok.getText();

        let value = ctx.primitiveLiteral().getText();
        this._addPropTuple(this._objType, this._objPath, opStr, value);
    }

    exitPropTestOrder(ctx) {
        let opTok = ctx.GT() || ctx.LT() || ctx.GE() || ctx.LE();
        let opStr = ctx.NOT() ? "NOT " : "";
        opStr += opTok.getText();

        let value = ctx.orderableLiteral().getText();
        this._addPropTuple(this._objType, this._objPath, opStr, value);
    }

    exitPropTestSet(ctx) {
        let opStr = ctx.NOT() ? "NOT IN" : "IN";

        let value = ctx.setLiteral().getText();
        this._addPropTuple(this._objType, this._objPath, opStr, value);
    }

    exitPropTestLike(ctx) {
        let opStr = ctx.NOT() ? "NOT LIKE" : "LIKE";

        let value = ctx.StringLiteral().getText();
        this._addPropTuple(this._objType, this._objPath, opStr, value);
    }

    exitPropTestRegex(ctx) {
        let opStr = ctx.NOT() ? "NOT MATCHES" : "MATCHES";

        let value = ctx.StringLiteral().getText();
        this._addPropTuple(this._objType, this._objPath, opStr, value);
    }

    exitPropTestIsSubset(ctx) {
        let opStr = ctx.NOT() ? "NOT ISSUBSET" : "ISSUBSET";

        let value = ctx.StringLiteral().getText();
        this._addPropTuple(this._objType, this._objPath, opStr, value);
    }

    exitPropTestIsSuperset(ctx) {
        let opStr = ctx.NOT() ? "NOT ISSUPERSET" : "ISSUPERSET";

        let value = ctx.StringLiteral().getText();
        this._addPropTuple(this._objType, this._objPath, opStr, value);
    }

    exitObjectType(ctx) {
        this._objType = ctx.getText();
    }

    exitFirstPathComponent(ctx) {
        let path_component;
        if ( ctx.StringLiteral() ) {
            path_component = stringLiteralToString(ctx.StringLiteral());
        } else {
            path_component = ctx.getText();
        }
        this._objPath = [ path_component ];
    }

    exitKeyPathStep(ctx) {
        let path_component;
        if( ctx.IdentifierWithoutHyphen() ) {
            path_component = ctx.IdentifierWithoutHyphen().getText();
        } else {
            path_component = stringLiteralToString(ctx.StringLiteral());
        }
        this._objPath.push( path_component );
    }

    exitIndexPathStep(ctx) {
        if(ctx.ASTERISK()) {
            this._objPath.push(INDEX_STAR);
        } else {
            this._objPath.push( parseInt( ctx.IntPosLiteral.getText() ) );
        }
    }
}

exports.InspectionListener = InspectionListener;
exports.INDEX_STAR = INDEX_STAR;