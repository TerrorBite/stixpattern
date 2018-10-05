
var STIXPatternLexer = require( "./STIXPatternLexer" ).STIXPatternLexer;
var STIXPatternParser = require( "./STIXPatternParser" ).STIXPatternParser;
var antlr4 = require("antlr4");
var ParseCancellationException = require("antlr4/error/Errors").ParseCancellationException;
var ParseTreeWalker = require("antlr4/Tree").ParseTreeWalker;
var InspectionListener = require("./InspectionListener").InspectionListener;

/** Simple error listener that just remembers the last error received. */
class ParserErrorListener extends antlr4.error.ErrorListener {
	syntaxError(recogniser, offendingSymbol, line, col, msg, e) {
		//console.log("ParserErrorListener: Syntax Error")
		this.errorMessage = `${line}:${col}: ${msg}`;
		this._context = recogniser._ctx;
	}
	getRealException() {
		return this._context.exception;
	}
}

/** Represents a parse error. */
class ParseError extends Error {
	constructor( message ) {
		super( message );
		this.name = "ParseError";
	}
}

/**
 * Represents a STIX Pattern in "compiled" form, for more efficient reuse.
 */
class Pattern {
	/**
	 * Compile a pattern.
	 * @param {string} patternStr The pattern to compile
	 * @throws ParseError if there is a parse error
	 */
	constructor( patternStr ) {
		this._parseTree = this._doParse( patternStr );
	}

	/**
	 * Inspect this pattern. This gives information regarding the sorts of
	 * operations, content, etc in use in the pattern.
	 * @returns Pattern information
	 */
	inspect() {
		var inspector = new InspectionListener();
		this.walk( inspector );
		return inspector.patternData();
	}

	/**
	 * Walk the parse tree, using the given listener.
	 * The listener should be a STIXPatternListener (or subclass) instance.
	 * @param {STIXPatternListener} listener 
	 */
	walk( listener ) {
		ParseTreeWalker.DEFAULT.walk( listener, this._parseTree );
	}

	/**
	 * Parses the given pattern and returns the antlr parse tree.
	 * @private
	 * @param {string} patternStr The STIX pattern
	 * @returns {antlr4.} the parse tree
	 * @throws ParseError if a parse error occurs
	 */
	_doParse( patternStr ) {
		var inStream = new antlr4.InputStream( patternStr );
		var lexer = new STIXPatternLexer( inStream );
		lexer.removeErrorListeners();
		var tokenStream = new antlr4.CommonTokenStream( lexer );
		
		var parser = new STIXPatternParser( tokenStream );
		parser.removeErrorListeners();

		var errorListener = new ParserErrorListener();
		parser.addErrorListener( errorListener );

		/* Copying logic found in OASIS cti-pattern-validator
		 * They found no public API to do this, but we want to stop
		 * parsing when we hit an error, while the default error
		 * handler would keep parsing.
		 */
		parser._errHandler = new antlr4.error.BailErrorStrategy();

		// This cleans up potential error messages:
		// This is the same hack used in the OASIS Python STIX Validator
		for( let i in parser.literalNames ) {
			if ( parser.literalNames[i] == "<INVALID>" ) {
				parser.literalNames[i] = parser.symbolicNames[i];
			}
		}

		// parser.setTrace( true );

		var tree;
		try {
			tree = parser.pattern();
			return tree;
		} catch(e) {
			if( e instanceof ParseCancellationException ) {
				throw new ParseError( errorListener.errorMessage );
			} else {
				throw e;
			}
		}
	}
}

/* The ANTLR JS runtime seems to have a bug.
 * "t instanceof TerminalNode" fails to detect TerminalNodeImpl,
 * and in fact, when t is a TerminalNodeImpl,
 * t.constructor !== Tree.TerminalNodeImpl even though it should be.
 * This is a workaround for this issue.
 */
{
	let Tree = require("antlr4/Tree/Tree");
	ParseTreeWalker.prototype.walk = function(listener, t) {
		var errorNode = t instanceof Tree.ErrorNode ||
				(t.isErrorNode !== undefined && t.isErrorNode());
		if (errorNode) {
			listener.visitErrorNode(t);
		} else if (t instanceof Tree.TerminalNode ||
				// Our patch added here. This is dirty, but it works.
				t.getRuleContext === undefined) {
			listener.visitTerminal(t);
		} else {
			this.enterRule(listener, t);
			for (var i = 0; i < t.getChildCount(); i++) {
				var child = t.getChild(i);
				this.walk(listener, child);
			}
			this.exitRule(listener, t);
		}
	};
}

exports.Pattern = Pattern;