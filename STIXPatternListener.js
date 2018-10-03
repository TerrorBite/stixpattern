// Generated from STIXPattern.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by STIXPatternParser.
function STIXPatternListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

STIXPatternListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
STIXPatternListener.prototype.constructor = STIXPatternListener;

// Enter a parse tree produced by STIXPatternParser#pattern.
STIXPatternListener.prototype.enterPattern = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#pattern.
STIXPatternListener.prototype.exitPattern = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressions.
STIXPatternListener.prototype.enterObservationExpressions = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressions.
STIXPatternListener.prototype.exitObservationExpressions = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressionOr.
STIXPatternListener.prototype.enterObservationExpressionOr = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressionOr.
STIXPatternListener.prototype.exitObservationExpressionOr = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressionAnd.
STIXPatternListener.prototype.enterObservationExpressionAnd = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressionAnd.
STIXPatternListener.prototype.exitObservationExpressionAnd = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressionRepeated.
STIXPatternListener.prototype.enterObservationExpressionRepeated = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressionRepeated.
STIXPatternListener.prototype.exitObservationExpressionRepeated = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressionSimple.
STIXPatternListener.prototype.enterObservationExpressionSimple = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressionSimple.
STIXPatternListener.prototype.exitObservationExpressionSimple = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressionCompound.
STIXPatternListener.prototype.enterObservationExpressionCompound = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressionCompound.
STIXPatternListener.prototype.exitObservationExpressionCompound = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressionWithin.
STIXPatternListener.prototype.enterObservationExpressionWithin = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressionWithin.
STIXPatternListener.prototype.exitObservationExpressionWithin = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#observationExpressionStartStop.
STIXPatternListener.prototype.enterObservationExpressionStartStop = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#observationExpressionStartStop.
STIXPatternListener.prototype.exitObservationExpressionStartStop = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#comparisonExpression.
STIXPatternListener.prototype.enterComparisonExpression = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#comparisonExpression.
STIXPatternListener.prototype.exitComparisonExpression = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#comparisonExpressionAnd.
STIXPatternListener.prototype.enterComparisonExpressionAnd = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#comparisonExpressionAnd.
STIXPatternListener.prototype.exitComparisonExpressionAnd = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestEqual.
STIXPatternListener.prototype.enterPropTestEqual = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestEqual.
STIXPatternListener.prototype.exitPropTestEqual = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestOrder.
STIXPatternListener.prototype.enterPropTestOrder = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestOrder.
STIXPatternListener.prototype.exitPropTestOrder = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestSet.
STIXPatternListener.prototype.enterPropTestSet = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestSet.
STIXPatternListener.prototype.exitPropTestSet = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestLike.
STIXPatternListener.prototype.enterPropTestLike = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestLike.
STIXPatternListener.prototype.exitPropTestLike = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestRegex.
STIXPatternListener.prototype.enterPropTestRegex = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestRegex.
STIXPatternListener.prototype.exitPropTestRegex = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestIsSubset.
STIXPatternListener.prototype.enterPropTestIsSubset = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestIsSubset.
STIXPatternListener.prototype.exitPropTestIsSubset = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestIsSuperset.
STIXPatternListener.prototype.enterPropTestIsSuperset = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestIsSuperset.
STIXPatternListener.prototype.exitPropTestIsSuperset = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#propTestParen.
STIXPatternListener.prototype.enterPropTestParen = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#propTestParen.
STIXPatternListener.prototype.exitPropTestParen = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#startStopQualifier.
STIXPatternListener.prototype.enterStartStopQualifier = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#startStopQualifier.
STIXPatternListener.prototype.exitStartStopQualifier = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#withinQualifier.
STIXPatternListener.prototype.enterWithinQualifier = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#withinQualifier.
STIXPatternListener.prototype.exitWithinQualifier = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#repeatedQualifier.
STIXPatternListener.prototype.enterRepeatedQualifier = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#repeatedQualifier.
STIXPatternListener.prototype.exitRepeatedQualifier = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#objectPath.
STIXPatternListener.prototype.enterObjectPath = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#objectPath.
STIXPatternListener.prototype.exitObjectPath = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#objectType.
STIXPatternListener.prototype.enterObjectType = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#objectType.
STIXPatternListener.prototype.exitObjectType = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#firstPathComponent.
STIXPatternListener.prototype.enterFirstPathComponent = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#firstPathComponent.
STIXPatternListener.prototype.exitFirstPathComponent = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#indexPathStep.
STIXPatternListener.prototype.enterIndexPathStep = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#indexPathStep.
STIXPatternListener.prototype.exitIndexPathStep = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#pathStep.
STIXPatternListener.prototype.enterPathStep = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#pathStep.
STIXPatternListener.prototype.exitPathStep = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#keyPathStep.
STIXPatternListener.prototype.enterKeyPathStep = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#keyPathStep.
STIXPatternListener.prototype.exitKeyPathStep = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#setLiteral.
STIXPatternListener.prototype.enterSetLiteral = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#setLiteral.
STIXPatternListener.prototype.exitSetLiteral = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#primitiveLiteral.
STIXPatternListener.prototype.enterPrimitiveLiteral = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#primitiveLiteral.
STIXPatternListener.prototype.exitPrimitiveLiteral = function(ctx) {
};


// Enter a parse tree produced by STIXPatternParser#orderableLiteral.
STIXPatternListener.prototype.enterOrderableLiteral = function(ctx) {
};

// Exit a parse tree produced by STIXPatternParser#orderableLiteral.
STIXPatternListener.prototype.exitOrderableLiteral = function(ctx) {
};



exports.STIXPatternListener = STIXPatternListener;