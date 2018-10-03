// Generated from STIXPattern.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var STIXPatternListener = require('./STIXPatternListener').STIXPatternListener;
var grammarFileName = "STIXPattern.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00037\u00e9\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0007\u00030\n\u0003\f\u0003\u000e\u00033\u000b\u0003",
    "\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004",
    "\u0007\u0004;\n\u0004\f\u0004\u000e\u0004>\u000b\u0004\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0007\u0005F",
    "\n\u0005\f\u0005\u000e\u0005I\u000b\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0005\u0006T\n\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0003\u0006\u0007\u0006\\\n\u0006\f\u0006\u000e\u0006",
    "_\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0007\u0007g\n\u0007\f\u0007\u000e\u0007j\u000b\u0007",
    "\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0007\br\n\b\f\b\u000e",
    "\bu\u000b\b\u0003\t\u0003\t\u0005\ty\n\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0005\t\u0080\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0005\t\u0087\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u008e",
    "\n\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u0095\n\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\t\u009c\n\t\u0003\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0005\t\u00a3\n\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\t\u00ac\n\t\u0003\n\u0003\n\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\u000b\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\r\u0003\r\u0003\r\u0003\r\u0005\r\u00bf",
    "\n\r\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00cb",
    "\n\u0010\u0003\u0010\u0003\u0010\u0007\u0010\u00cf\n\u0010\f\u0010\u000e",
    "\u0010\u00d2\u000b\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0011",
    "\u0003\u0011\u0003\u0011\u0007\u0011\u00da\n\u0011\f\u0011\u000e\u0011",
    "\u00dd\u000b\u0011\u0003\u0011\u0003\u0011\u0005\u0011\u00e1\n\u0011",
    "\u0003\u0012\u0003\u0012\u0005\u0012\u00e5\n\u0012\u0003\u0013\u0003",
    "\u0013\u0003\u0013\u0002\t\u0004\u0006\b\n\f\u000e\u001e\u0014\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u001c\u001e",
    " \"$\u0002\t\u0003\u0002 !\u0003\u0002\"%\u0004\u0002\u0004\u0004\u0006",
    "\u0006\u0003\u0002\u001e\u001f\u0004\u0002\t\t\u001e\u001e\u0004\u0002",
    "\u0003\u000433\u0004\u0002\u0003\t\u000b\u000b\u0002\u00f3\u0002&\u0003",
    "\u0002\u0002\u0002\u0004)\u0003\u0002\u0002\u0002\u00064\u0003\u0002",
    "\u0002\u0002\b?\u0003\u0002\u0002\u0002\nS\u0003\u0002\u0002\u0002\f",
    "`\u0003\u0002\u0002\u0002\u000ek\u0003\u0002\u0002\u0002\u0010\u00ab",
    "\u0003\u0002\u0002\u0002\u0012\u00ad\u0003\u0002\u0002\u0002\u0014\u00b2",
    "\u0003\u0002\u0002\u0002\u0016\u00b6\u0003\u0002\u0002\u0002\u0018\u00ba",
    "\u0003\u0002\u0002\u0002\u001a\u00c0\u0003\u0002\u0002\u0002\u001c\u00c2",
    "\u0003\u0002\u0002\u0002\u001e\u00ca\u0003\u0002\u0002\u0002 \u00e0",
    "\u0003\u0002\u0002\u0002\"\u00e4\u0003\u0002\u0002\u0002$\u00e6\u0003",
    "\u0002\u0002\u0002&\'\u0005\u0004\u0003\u0002\'(\u0007\u0002\u0002\u0003",
    "(\u0003\u0003\u0002\u0002\u0002)*\b\u0003\u0001\u0002*+\u0005\u0006",
    "\u0004\u0002+1\u0003\u0002\u0002\u0002,-\f\u0004\u0002\u0002-.\u0007",
    "\u000f\u0002\u0002.0\u0005\u0004\u0003\u0005/,\u0003\u0002\u0002\u0002",
    "03\u0003\u0002\u0002\u00021/\u0003\u0002\u0002\u000212\u0003\u0002\u0002",
    "\u00022\u0005\u0003\u0002\u0002\u000231\u0003\u0002\u0002\u000245\b",
    "\u0004\u0001\u000256\u0005\b\u0005\u00026<\u0003\u0002\u0002\u00027",
    "8\f\u0004\u0002\u000289\u0007\r\u0002\u00029;\u0005\u0006\u0004\u0005",
    ":7\u0003\u0002\u0002\u0002;>\u0003\u0002\u0002\u0002<:\u0003\u0002\u0002",
    "\u0002<=\u0003\u0002\u0002\u0002=\u0007\u0003\u0002\u0002\u0002><\u0003",
    "\u0002\u0002\u0002?@\b\u0005\u0001\u0002@A\u0005\n\u0006\u0002AG\u0003",
    "\u0002\u0002\u0002BC\f\u0004\u0002\u0002CD\u0007\f\u0002\u0002DF\u0005",
    "\b\u0005\u0005EB\u0003\u0002\u0002\u0002FI\u0003\u0002\u0002\u0002G",
    "E\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002H\t\u0003\u0002\u0002",
    "\u0002IG\u0003\u0002\u0002\u0002JK\b\u0006\u0001\u0002KL\u0007-\u0002",
    "\u0002LM\u0005\f\u0007\u0002MN\u0007,\u0002\u0002NT\u0003\u0002\u0002",
    "\u0002OP\u0007+\u0002\u0002PQ\u0005\u0004\u0003\u0002QR\u0007*\u0002",
    "\u0002RT\u0003\u0002\u0002\u0002SJ\u0003\u0002\u0002\u0002SO\u0003\u0002",
    "\u0002\u0002T]\u0003\u0002\u0002\u0002UV\f\u0005\u0002\u0002V\\\u0005",
    "\u0012\n\u0002WX\f\u0004\u0002\u0002X\\\u0005\u0014\u000b\u0002YZ\f",
    "\u0003\u0002\u0002Z\\\u0005\u0016\f\u0002[U\u0003\u0002\u0002\u0002",
    "[W\u0003\u0002\u0002\u0002[Y\u0003\u0002\u0002\u0002\\_\u0003\u0002",
    "\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^\u000b",
    "\u0003\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002`a\b\u0007\u0001\u0002",
    "ab\u0005\u000e\b\u0002bh\u0003\u0002\u0002\u0002cd\f\u0004\u0002\u0002",
    "de\u0007\r\u0002\u0002eg\u0005\f\u0007\u0005fc\u0003\u0002\u0002\u0002",
    "gj\u0003\u0002\u0002\u0002hf\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002",
    "\u0002i\r\u0003\u0002\u0002\u0002jh\u0003\u0002\u0002\u0002kl\b\b\u0001",
    "\u0002lm\u0005\u0010\t\u0002ms\u0003\u0002\u0002\u0002no\f\u0004\u0002",
    "\u0002op\u0007\f\u0002\u0002pr\u0005\u000e\b\u0005qn\u0003\u0002\u0002",
    "\u0002ru\u0003\u0002\u0002\u0002sq\u0003\u0002\u0002\u0002st\u0003\u0002",
    "\u0002\u0002t\u000f\u0003\u0002\u0002\u0002us\u0003\u0002\u0002\u0002",
    "vx\u0005\u0018\r\u0002wy\u0007\u000e\u0002\u0002xw\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002yz\u0003\u0002\u0002\u0002z{\t\u0002",
    "\u0002\u0002{|\u0005\"\u0012\u0002|\u00ac\u0003\u0002\u0002\u0002}\u007f",
    "\u0005\u0018\r\u0002~\u0080\u0007\u000e\u0002\u0002\u007f~\u0003\u0002",
    "\u0002\u0002\u007f\u0080\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002",
    "\u0002\u0002\u0081\u0082\t\u0003\u0002\u0002\u0082\u0083\u0005$\u0013",
    "\u0002\u0083\u00ac\u0003\u0002\u0002\u0002\u0084\u0086\u0005\u0018\r",
    "\u0002\u0085\u0087\u0007\u000e\u0002\u0002\u0086\u0085\u0003\u0002\u0002",
    "\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0088\u0003\u0002\u0002",
    "\u0002\u0088\u0089\u0007\u0015\u0002\u0002\u0089\u008a\u0005 \u0011",
    "\u0002\u008a\u00ac\u0003\u0002\u0002\u0002\u008b\u008d\u0005\u0018\r",
    "\u0002\u008c\u008e\u0007\u000e\u0002\u0002\u008d\u008c\u0003\u0002\u0002",
    "\u0002\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008f\u0003\u0002\u0002",
    "\u0002\u008f\u0090\u0007\u0010\u0002\u0002\u0090\u0091\u0007\t\u0002",
    "\u0002\u0091\u00ac\u0003\u0002\u0002\u0002\u0092\u0094\u0005\u0018\r",
    "\u0002\u0093\u0095\u0007\u000e\u0002\u0002\u0094\u0093\u0003\u0002\u0002",
    "\u0002\u0094\u0095\u0003\u0002\u0002\u0002\u0095\u0096\u0003\u0002\u0002",
    "\u0002\u0096\u0097\u0007\u0011\u0002\u0002\u0097\u0098\u0007\t\u0002",
    "\u0002\u0098\u00ac\u0003\u0002\u0002\u0002\u0099\u009b\u0005\u0018\r",
    "\u0002\u009a\u009c\u0007\u000e\u0002\u0002\u009b\u009a\u0003\u0002\u0002",
    "\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d\u0003\u0002\u0002",
    "\u0002\u009d\u009e\u0007\u0013\u0002\u0002\u009e\u009f\u0007\t\u0002",
    "\u0002\u009f\u00ac\u0003\u0002\u0002\u0002\u00a0\u00a2\u0005\u0018\r",
    "\u0002\u00a1\u00a3\u0007\u000e\u0002\u0002\u00a2\u00a1\u0003\u0002\u0002",
    "\u0002\u00a2\u00a3\u0003\u0002\u0002\u0002\u00a3\u00a4\u0003\u0002\u0002",
    "\u0002\u00a4\u00a5\u0007\u0012\u0002\u0002\u00a5\u00a6\u0007\t\u0002",
    "\u0002\u00a6\u00ac\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007+\u0002",
    "\u0002\u00a8\u00a9\u0005\f\u0007\u0002\u00a9\u00aa\u0007*\u0002\u0002",
    "\u00aa\u00ac\u0003\u0002\u0002\u0002\u00abv\u0003\u0002\u0002\u0002",
    "\u00ab}\u0003\u0002\u0002\u0002\u00ab\u0084\u0003\u0002\u0002\u0002",
    "\u00ab\u008b\u0003\u0002\u0002\u0002\u00ab\u0092\u0003\u0002\u0002\u0002",
    "\u00ab\u0099\u0003\u0002\u0002\u0002\u00ab\u00a0\u0003\u0002\u0002\u0002",
    "\u00ab\u00a7\u0003\u0002\u0002\u0002\u00ac\u0011\u0003\u0002\u0002\u0002",
    "\u00ad\u00ae\u0007\u0016\u0002\u0002\u00ae\u00af\u0007\u000b\u0002\u0002",
    "\u00af\u00b0\u0007\u0017\u0002\u0002\u00b0\u00b1\u0007\u000b\u0002\u0002",
    "\u00b1\u0013\u0003\u0002\u0002\u0002\u00b2\u00b3\u0007\u001b\u0002\u0002",
    "\u00b3\u00b4\t\u0004\u0002\u0002\u00b4\u00b5\u0007\u0018\u0002\u0002",
    "\u00b5\u0015\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007\u001c\u0002\u0002",
    "\u00b7\u00b8\u0007\u0004\u0002\u0002\u00b8\u00b9\u0007\u001d\u0002\u0002",
    "\u00b9\u0017\u0003\u0002\u0002\u0002\u00ba\u00bb\u0005\u001a\u000e\u0002",
    "\u00bb\u00bc\u0007\'\u0002\u0002\u00bc\u00be\u0005\u001c\u000f\u0002",
    "\u00bd\u00bf\u0005\u001e\u0010\u0002\u00be\u00bd\u0003\u0002\u0002\u0002",
    "\u00be\u00bf\u0003\u0002\u0002\u0002\u00bf\u0019\u0003\u0002\u0002\u0002",
    "\u00c0\u00c1\t\u0005\u0002\u0002\u00c1\u001b\u0003\u0002\u0002\u0002",
    "\u00c2\u00c3\t\u0006\u0002\u0002\u00c3\u001d\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\b\u0010\u0001\u0002\u00c5\u00c6\u0007(\u0002\u0002\u00c6",
    "\u00cb\t\u0006\u0002\u0002\u00c7\u00c8\u0007-\u0002\u0002\u00c8\u00c9",
    "\t\u0007\u0002\u0002\u00c9\u00cb\u0007,\u0002\u0002\u00ca\u00c4\u0003",
    "\u0002\u0002\u0002\u00ca\u00c7\u0003\u0002\u0002\u0002\u00cb\u00d0\u0003",
    "\u0002\u0002\u0002\u00cc\u00cd\f\u0005\u0002\u0002\u00cd\u00cf\u0005",
    "\u001e\u0010\u0006\u00ce\u00cc\u0003\u0002\u0002\u0002\u00cf\u00d2\u0003",
    "\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00d1\u0003",
    "\u0002\u0002\u0002\u00d1\u001f\u0003\u0002\u0002\u0002\u00d2\u00d0\u0003",
    "\u0002\u0002\u0002\u00d3\u00d4\u0007+\u0002\u0002\u00d4\u00e1\u0007",
    "*\u0002\u0002\u00d5\u00d6\u0007+\u0002\u0002\u00d6\u00db\u0005\"\u0012",
    "\u0002\u00d7\u00d8\u0007)\u0002\u0002\u00d8\u00da\u0005\"\u0012\u0002",
    "\u00d9\u00d7\u0003\u0002\u0002\u0002\u00da\u00dd\u0003\u0002\u0002\u0002",
    "\u00db\u00d9\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002",
    "\u00dc\u00de\u0003\u0002\u0002\u0002\u00dd\u00db\u0003\u0002\u0002\u0002",
    "\u00de\u00df\u0007*\u0002\u0002\u00df\u00e1\u0003\u0002\u0002\u0002",
    "\u00e0\u00d3\u0003\u0002\u0002\u0002\u00e0\u00d5\u0003\u0002\u0002\u0002",
    "\u00e1!\u0003\u0002\u0002\u0002\u00e2\u00e5\u0005$\u0013\u0002\u00e3",
    "\u00e5\u0007\n\u0002\u0002\u00e4\u00e2\u0003\u0002\u0002\u0002\u00e4",
    "\u00e3\u0003\u0002\u0002\u0002\u00e5#\u0003\u0002\u0002\u0002\u00e6",
    "\u00e7\t\b\u0002\u0002\u00e7%\u0003\u0002\u0002\u0002\u00181<GS[]hs",
    "x\u007f\u0086\u008d\u0094\u009b\u00a2\u00ab\u00be\u00ca\u00d0\u00db",
    "\u00e0\u00e4"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, null, null, null, null, null, null, null, null, 
                     null, "'AND'", "'OR'", "'NOT'", "'FOLLOWEDBY'", "'LIKE'", 
                     "'MATCHES'", "'ISSUPERSET'", "'ISSUBSET'", "'LAST'", 
                     "'IN'", "'START'", "'STOP'", "'SECONDS'", "'true'", 
                     "'false'", "'WITHIN'", "'REPEATS'", "'TIMES'", null, 
                     null, null, null, "'<'", "'<='", "'>'", "'>='", "'''", 
                     "':'", "'.'", "','", "')'", "'('", "']'", "'['", "'+'", 
                     null, "'-'", "'^'", "'/'", "'*'" ];

var symbolicNames = [ null, "IntNegLiteral", "IntPosLiteral", "FloatNegLiteral", 
                      "FloatPosLiteral", "HexLiteral", "BinaryLiteral", 
                      "StringLiteral", "BoolLiteral", "TimestampLiteral", 
                      "AND", "OR", "NOT", "FOLLOWEDBY", "LIKE", "MATCHES", 
                      "ISSUPERSET", "ISSUBSET", "LAST", "IN", "START", "STOP", 
                      "SECONDS", "TRUE", "FALSE", "WITHIN", "REPEATS", "TIMES", 
                      "IdentifierWithoutHyphen", "IdentifierWithHyphen", 
                      "EQ", "NEQ", "LT", "LE", "GT", "GE", "QUOTE", "COLON", 
                      "DOT", "COMMA", "RPAREN", "LPAREN", "RBRACK", "LBRACK", 
                      "PLUS", "HYPHEN", "MINUS", "POWER_OP", "DIVIDE", "ASTERISK", 
                      "WS", "COMMENT", "LINE_COMMENT", "InvalidCharacter" ];

var ruleNames =  [ "pattern", "observationExpressions", "observationExpressionOr", 
                   "observationExpressionAnd", "observationExpression", 
                   "comparisonExpression", "comparisonExpressionAnd", "propTest", 
                   "startStopQualifier", "withinQualifier", "repeatedQualifier", 
                   "objectPath", "objectType", "firstPathComponent", "objectPathComponent", 
                   "setLiteral", "primitiveLiteral", "orderableLiteral" ];

function STIXPatternParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

STIXPatternParser.prototype = Object.create(antlr4.Parser.prototype);
STIXPatternParser.prototype.constructor = STIXPatternParser;

Object.defineProperty(STIXPatternParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

STIXPatternParser.EOF = antlr4.Token.EOF;
STIXPatternParser.IntNegLiteral = 1;
STIXPatternParser.IntPosLiteral = 2;
STIXPatternParser.FloatNegLiteral = 3;
STIXPatternParser.FloatPosLiteral = 4;
STIXPatternParser.HexLiteral = 5;
STIXPatternParser.BinaryLiteral = 6;
STIXPatternParser.StringLiteral = 7;
STIXPatternParser.BoolLiteral = 8;
STIXPatternParser.TimestampLiteral = 9;
STIXPatternParser.AND = 10;
STIXPatternParser.OR = 11;
STIXPatternParser.NOT = 12;
STIXPatternParser.FOLLOWEDBY = 13;
STIXPatternParser.LIKE = 14;
STIXPatternParser.MATCHES = 15;
STIXPatternParser.ISSUPERSET = 16;
STIXPatternParser.ISSUBSET = 17;
STIXPatternParser.LAST = 18;
STIXPatternParser.IN = 19;
STIXPatternParser.START = 20;
STIXPatternParser.STOP = 21;
STIXPatternParser.SECONDS = 22;
STIXPatternParser.TRUE = 23;
STIXPatternParser.FALSE = 24;
STIXPatternParser.WITHIN = 25;
STIXPatternParser.REPEATS = 26;
STIXPatternParser.TIMES = 27;
STIXPatternParser.IdentifierWithoutHyphen = 28;
STIXPatternParser.IdentifierWithHyphen = 29;
STIXPatternParser.EQ = 30;
STIXPatternParser.NEQ = 31;
STIXPatternParser.LT = 32;
STIXPatternParser.LE = 33;
STIXPatternParser.GT = 34;
STIXPatternParser.GE = 35;
STIXPatternParser.QUOTE = 36;
STIXPatternParser.COLON = 37;
STIXPatternParser.DOT = 38;
STIXPatternParser.COMMA = 39;
STIXPatternParser.RPAREN = 40;
STIXPatternParser.LPAREN = 41;
STIXPatternParser.RBRACK = 42;
STIXPatternParser.LBRACK = 43;
STIXPatternParser.PLUS = 44;
STIXPatternParser.HYPHEN = 45;
STIXPatternParser.MINUS = 46;
STIXPatternParser.POWER_OP = 47;
STIXPatternParser.DIVIDE = 48;
STIXPatternParser.ASTERISK = 49;
STIXPatternParser.WS = 50;
STIXPatternParser.COMMENT = 51;
STIXPatternParser.LINE_COMMENT = 52;
STIXPatternParser.InvalidCharacter = 53;

STIXPatternParser.RULE_pattern = 0;
STIXPatternParser.RULE_observationExpressions = 1;
STIXPatternParser.RULE_observationExpressionOr = 2;
STIXPatternParser.RULE_observationExpressionAnd = 3;
STIXPatternParser.RULE_observationExpression = 4;
STIXPatternParser.RULE_comparisonExpression = 5;
STIXPatternParser.RULE_comparisonExpressionAnd = 6;
STIXPatternParser.RULE_propTest = 7;
STIXPatternParser.RULE_startStopQualifier = 8;
STIXPatternParser.RULE_withinQualifier = 9;
STIXPatternParser.RULE_repeatedQualifier = 10;
STIXPatternParser.RULE_objectPath = 11;
STIXPatternParser.RULE_objectType = 12;
STIXPatternParser.RULE_firstPathComponent = 13;
STIXPatternParser.RULE_objectPathComponent = 14;
STIXPatternParser.RULE_setLiteral = 15;
STIXPatternParser.RULE_primitiveLiteral = 16;
STIXPatternParser.RULE_orderableLiteral = 17;

function PatternContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_pattern;
    return this;
}

PatternContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PatternContext.prototype.constructor = PatternContext;

PatternContext.prototype.observationExpressions = function() {
    return this.getTypedRuleContext(ObservationExpressionsContext,0);
};

PatternContext.prototype.EOF = function() {
    return this.getToken(STIXPatternParser.EOF, 0);
};

PatternContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPattern(this);
	}
};

PatternContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPattern(this);
	}
};




STIXPatternParser.PatternContext = PatternContext;

STIXPatternParser.prototype.pattern = function() {

    var localctx = new PatternContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, STIXPatternParser.RULE_pattern);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 36;
        this.observationExpressions(0);
        this.state = 37;
        this.match(STIXPatternParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObservationExpressionsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_observationExpressions;
    return this;
}

ObservationExpressionsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObservationExpressionsContext.prototype.constructor = ObservationExpressionsContext;

ObservationExpressionsContext.prototype.observationExpressionOr = function() {
    return this.getTypedRuleContext(ObservationExpressionOrContext,0);
};

ObservationExpressionsContext.prototype.observationExpressions = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObservationExpressionsContext);
    } else {
        return this.getTypedRuleContext(ObservationExpressionsContext,i);
    }
};

ObservationExpressionsContext.prototype.FOLLOWEDBY = function() {
    return this.getToken(STIXPatternParser.FOLLOWEDBY, 0);
};

ObservationExpressionsContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressions(this);
	}
};

ObservationExpressionsContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressions(this);
	}
};



STIXPatternParser.prototype.observationExpressions = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ObservationExpressionsContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, STIXPatternParser.RULE_observationExpressions, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 40;
        this.observationExpressionOr(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 47;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,0,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ObservationExpressionsContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_observationExpressions);
                this.state = 42;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 43;
                this.match(STIXPatternParser.FOLLOWEDBY);
                this.state = 44;
                this.observationExpressions(3); 
            }
            this.state = 49;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,0,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ObservationExpressionOrContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_observationExpressionOr;
    return this;
}

ObservationExpressionOrContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObservationExpressionOrContext.prototype.constructor = ObservationExpressionOrContext;

ObservationExpressionOrContext.prototype.observationExpressionAnd = function() {
    return this.getTypedRuleContext(ObservationExpressionAndContext,0);
};

ObservationExpressionOrContext.prototype.observationExpressionOr = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObservationExpressionOrContext);
    } else {
        return this.getTypedRuleContext(ObservationExpressionOrContext,i);
    }
};

ObservationExpressionOrContext.prototype.OR = function() {
    return this.getToken(STIXPatternParser.OR, 0);
};

ObservationExpressionOrContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressionOr(this);
	}
};

ObservationExpressionOrContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressionOr(this);
	}
};



STIXPatternParser.prototype.observationExpressionOr = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ObservationExpressionOrContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, STIXPatternParser.RULE_observationExpressionOr, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 51;
        this.observationExpressionAnd(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 58;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,1,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ObservationExpressionOrContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_observationExpressionOr);
                this.state = 53;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 54;
                this.match(STIXPatternParser.OR);
                this.state = 55;
                this.observationExpressionOr(3); 
            }
            this.state = 60;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,1,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ObservationExpressionAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_observationExpressionAnd;
    return this;
}

ObservationExpressionAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObservationExpressionAndContext.prototype.constructor = ObservationExpressionAndContext;

ObservationExpressionAndContext.prototype.observationExpression = function() {
    return this.getTypedRuleContext(ObservationExpressionContext,0);
};

ObservationExpressionAndContext.prototype.observationExpressionAnd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObservationExpressionAndContext);
    } else {
        return this.getTypedRuleContext(ObservationExpressionAndContext,i);
    }
};

ObservationExpressionAndContext.prototype.AND = function() {
    return this.getToken(STIXPatternParser.AND, 0);
};

ObservationExpressionAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressionAnd(this);
	}
};

ObservationExpressionAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressionAnd(this);
	}
};



STIXPatternParser.prototype.observationExpressionAnd = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ObservationExpressionAndContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 6;
    this.enterRecursionRule(localctx, 6, STIXPatternParser.RULE_observationExpressionAnd, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 62;
        this.observationExpression(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 69;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ObservationExpressionAndContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_observationExpressionAnd);
                this.state = 64;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 65;
                this.match(STIXPatternParser.AND);
                this.state = 66;
                this.observationExpressionAnd(3); 
            }
            this.state = 71;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ObservationExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_observationExpression;
    return this;
}

ObservationExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObservationExpressionContext.prototype.constructor = ObservationExpressionContext;


 
ObservationExpressionContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function ObservationExpressionRepeatedContext(parser, ctx) {
	ObservationExpressionContext.call(this, parser);
    ObservationExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObservationExpressionRepeatedContext.prototype = Object.create(ObservationExpressionContext.prototype);
ObservationExpressionRepeatedContext.prototype.constructor = ObservationExpressionRepeatedContext;

STIXPatternParser.ObservationExpressionRepeatedContext = ObservationExpressionRepeatedContext;

ObservationExpressionRepeatedContext.prototype.observationExpression = function() {
    return this.getTypedRuleContext(ObservationExpressionContext,0);
};

ObservationExpressionRepeatedContext.prototype.repeatedQualifier = function() {
    return this.getTypedRuleContext(RepeatedQualifierContext,0);
};
ObservationExpressionRepeatedContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressionRepeated(this);
	}
};

ObservationExpressionRepeatedContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressionRepeated(this);
	}
};


function ObservationExpressionSimpleContext(parser, ctx) {
	ObservationExpressionContext.call(this, parser);
    ObservationExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObservationExpressionSimpleContext.prototype = Object.create(ObservationExpressionContext.prototype);
ObservationExpressionSimpleContext.prototype.constructor = ObservationExpressionSimpleContext;

STIXPatternParser.ObservationExpressionSimpleContext = ObservationExpressionSimpleContext;

ObservationExpressionSimpleContext.prototype.LBRACK = function() {
    return this.getToken(STIXPatternParser.LBRACK, 0);
};

ObservationExpressionSimpleContext.prototype.comparisonExpression = function() {
    return this.getTypedRuleContext(ComparisonExpressionContext,0);
};

ObservationExpressionSimpleContext.prototype.RBRACK = function() {
    return this.getToken(STIXPatternParser.RBRACK, 0);
};
ObservationExpressionSimpleContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressionSimple(this);
	}
};

ObservationExpressionSimpleContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressionSimple(this);
	}
};


function ObservationExpressionCompoundContext(parser, ctx) {
	ObservationExpressionContext.call(this, parser);
    ObservationExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObservationExpressionCompoundContext.prototype = Object.create(ObservationExpressionContext.prototype);
ObservationExpressionCompoundContext.prototype.constructor = ObservationExpressionCompoundContext;

STIXPatternParser.ObservationExpressionCompoundContext = ObservationExpressionCompoundContext;

ObservationExpressionCompoundContext.prototype.LPAREN = function() {
    return this.getToken(STIXPatternParser.LPAREN, 0);
};

ObservationExpressionCompoundContext.prototype.observationExpressions = function() {
    return this.getTypedRuleContext(ObservationExpressionsContext,0);
};

ObservationExpressionCompoundContext.prototype.RPAREN = function() {
    return this.getToken(STIXPatternParser.RPAREN, 0);
};
ObservationExpressionCompoundContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressionCompound(this);
	}
};

ObservationExpressionCompoundContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressionCompound(this);
	}
};


function ObservationExpressionWithinContext(parser, ctx) {
	ObservationExpressionContext.call(this, parser);
    ObservationExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObservationExpressionWithinContext.prototype = Object.create(ObservationExpressionContext.prototype);
ObservationExpressionWithinContext.prototype.constructor = ObservationExpressionWithinContext;

STIXPatternParser.ObservationExpressionWithinContext = ObservationExpressionWithinContext;

ObservationExpressionWithinContext.prototype.observationExpression = function() {
    return this.getTypedRuleContext(ObservationExpressionContext,0);
};

ObservationExpressionWithinContext.prototype.withinQualifier = function() {
    return this.getTypedRuleContext(WithinQualifierContext,0);
};
ObservationExpressionWithinContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressionWithin(this);
	}
};

ObservationExpressionWithinContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressionWithin(this);
	}
};


function ObservationExpressionStartStopContext(parser, ctx) {
	ObservationExpressionContext.call(this, parser);
    ObservationExpressionContext.prototype.copyFrom.call(this, ctx);
    return this;
}

ObservationExpressionStartStopContext.prototype = Object.create(ObservationExpressionContext.prototype);
ObservationExpressionStartStopContext.prototype.constructor = ObservationExpressionStartStopContext;

STIXPatternParser.ObservationExpressionStartStopContext = ObservationExpressionStartStopContext;

ObservationExpressionStartStopContext.prototype.observationExpression = function() {
    return this.getTypedRuleContext(ObservationExpressionContext,0);
};

ObservationExpressionStartStopContext.prototype.startStopQualifier = function() {
    return this.getTypedRuleContext(StartStopQualifierContext,0);
};
ObservationExpressionStartStopContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObservationExpressionStartStop(this);
	}
};

ObservationExpressionStartStopContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObservationExpressionStartStop(this);
	}
};



STIXPatternParser.prototype.observationExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ObservationExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 8;
    this.enterRecursionRule(localctx, 8, STIXPatternParser.RULE_observationExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 81;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case STIXPatternParser.LBRACK:
            localctx = new ObservationExpressionSimpleContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 73;
            this.match(STIXPatternParser.LBRACK);
            this.state = 74;
            this.comparisonExpression(0);
            this.state = 75;
            this.match(STIXPatternParser.RBRACK);
            break;
        case STIXPatternParser.LPAREN:
            localctx = new ObservationExpressionCompoundContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 77;
            this.match(STIXPatternParser.LPAREN);
            this.state = 78;
            this.observationExpressions(0);
            this.state = 79;
            this.match(STIXPatternParser.RPAREN);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 91;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 89;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ObservationExpressionStartStopContext(this, new ObservationExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_observationExpression);
                    this.state = 83;
                    if (!( this.precpred(this._ctx, 3))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                    }
                    this.state = 84;
                    this.startStopQualifier();
                    break;

                case 2:
                    localctx = new ObservationExpressionWithinContext(this, new ObservationExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_observationExpression);
                    this.state = 85;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 86;
                    this.withinQualifier();
                    break;

                case 3:
                    localctx = new ObservationExpressionRepeatedContext(this, new ObservationExpressionContext(this, _parentctx, _parentState));
                    this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_observationExpression);
                    this.state = 87;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 88;
                    this.repeatedQualifier();
                    break;

                } 
            }
            this.state = 93;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ComparisonExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_comparisonExpression;
    return this;
}

ComparisonExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonExpressionContext.prototype.constructor = ComparisonExpressionContext;

ComparisonExpressionContext.prototype.comparisonExpressionAnd = function() {
    return this.getTypedRuleContext(ComparisonExpressionAndContext,0);
};

ComparisonExpressionContext.prototype.comparisonExpression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComparisonExpressionContext);
    } else {
        return this.getTypedRuleContext(ComparisonExpressionContext,i);
    }
};

ComparisonExpressionContext.prototype.OR = function() {
    return this.getToken(STIXPatternParser.OR, 0);
};

ComparisonExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterComparisonExpression(this);
	}
};

ComparisonExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitComparisonExpression(this);
	}
};



STIXPatternParser.prototype.comparisonExpression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ComparisonExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 10;
    this.enterRecursionRule(localctx, 10, STIXPatternParser.RULE_comparisonExpression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.comparisonExpressionAnd(0);
        this._ctx.stop = this._input.LT(-1);
        this.state = 102;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ComparisonExpressionContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_comparisonExpression);
                this.state = 97;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 98;
                this.match(STIXPatternParser.OR);
                this.state = 99;
                this.comparisonExpression(3); 
            }
            this.state = 104;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function ComparisonExpressionAndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_comparisonExpressionAnd;
    return this;
}

ComparisonExpressionAndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ComparisonExpressionAndContext.prototype.constructor = ComparisonExpressionAndContext;

ComparisonExpressionAndContext.prototype.propTest = function() {
    return this.getTypedRuleContext(PropTestContext,0);
};

ComparisonExpressionAndContext.prototype.comparisonExpressionAnd = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ComparisonExpressionAndContext);
    } else {
        return this.getTypedRuleContext(ComparisonExpressionAndContext,i);
    }
};

ComparisonExpressionAndContext.prototype.AND = function() {
    return this.getToken(STIXPatternParser.AND, 0);
};

ComparisonExpressionAndContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterComparisonExpressionAnd(this);
	}
};

ComparisonExpressionAndContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitComparisonExpressionAnd(this);
	}
};



STIXPatternParser.prototype.comparisonExpressionAnd = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ComparisonExpressionAndContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 12;
    this.enterRecursionRule(localctx, 12, STIXPatternParser.RULE_comparisonExpressionAnd, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        this.propTest();
        this._ctx.stop = this._input.LT(-1);
        this.state = 113;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,7,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new ComparisonExpressionAndContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_comparisonExpressionAnd);
                this.state = 108;
                if (!( this.precpred(this._ctx, 2))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                }
                this.state = 109;
                this.match(STIXPatternParser.AND);
                this.state = 110;
                this.comparisonExpressionAnd(3); 
            }
            this.state = 115;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,7,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function PropTestContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_propTest;
    return this;
}

PropTestContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PropTestContext.prototype.constructor = PropTestContext;


 
PropTestContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};


function PropTestRegexContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestRegexContext.prototype = Object.create(PropTestContext.prototype);
PropTestRegexContext.prototype.constructor = PropTestRegexContext;

STIXPatternParser.PropTestRegexContext = PropTestRegexContext;

PropTestRegexContext.prototype.objectPath = function() {
    return this.getTypedRuleContext(ObjectPathContext,0);
};

PropTestRegexContext.prototype.MATCHES = function() {
    return this.getToken(STIXPatternParser.MATCHES, 0);
};

PropTestRegexContext.prototype.StringLiteral = function() {
    return this.getToken(STIXPatternParser.StringLiteral, 0);
};

PropTestRegexContext.prototype.NOT = function() {
    return this.getToken(STIXPatternParser.NOT, 0);
};
PropTestRegexContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestRegex(this);
	}
};

PropTestRegexContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestRegex(this);
	}
};


function PropTestOrderContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestOrderContext.prototype = Object.create(PropTestContext.prototype);
PropTestOrderContext.prototype.constructor = PropTestOrderContext;

STIXPatternParser.PropTestOrderContext = PropTestOrderContext;

PropTestOrderContext.prototype.objectPath = function() {
    return this.getTypedRuleContext(ObjectPathContext,0);
};

PropTestOrderContext.prototype.orderableLiteral = function() {
    return this.getTypedRuleContext(OrderableLiteralContext,0);
};

PropTestOrderContext.prototype.GT = function() {
    return this.getToken(STIXPatternParser.GT, 0);
};

PropTestOrderContext.prototype.LT = function() {
    return this.getToken(STIXPatternParser.LT, 0);
};

PropTestOrderContext.prototype.GE = function() {
    return this.getToken(STIXPatternParser.GE, 0);
};

PropTestOrderContext.prototype.LE = function() {
    return this.getToken(STIXPatternParser.LE, 0);
};

PropTestOrderContext.prototype.NOT = function() {
    return this.getToken(STIXPatternParser.NOT, 0);
};
PropTestOrderContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestOrder(this);
	}
};

PropTestOrderContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestOrder(this);
	}
};


function PropTestLikeContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestLikeContext.prototype = Object.create(PropTestContext.prototype);
PropTestLikeContext.prototype.constructor = PropTestLikeContext;

STIXPatternParser.PropTestLikeContext = PropTestLikeContext;

PropTestLikeContext.prototype.objectPath = function() {
    return this.getTypedRuleContext(ObjectPathContext,0);
};

PropTestLikeContext.prototype.LIKE = function() {
    return this.getToken(STIXPatternParser.LIKE, 0);
};

PropTestLikeContext.prototype.StringLiteral = function() {
    return this.getToken(STIXPatternParser.StringLiteral, 0);
};

PropTestLikeContext.prototype.NOT = function() {
    return this.getToken(STIXPatternParser.NOT, 0);
};
PropTestLikeContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestLike(this);
	}
};

PropTestLikeContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestLike(this);
	}
};


function PropTestEqualContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestEqualContext.prototype = Object.create(PropTestContext.prototype);
PropTestEqualContext.prototype.constructor = PropTestEqualContext;

STIXPatternParser.PropTestEqualContext = PropTestEqualContext;

PropTestEqualContext.prototype.objectPath = function() {
    return this.getTypedRuleContext(ObjectPathContext,0);
};

PropTestEqualContext.prototype.primitiveLiteral = function() {
    return this.getTypedRuleContext(PrimitiveLiteralContext,0);
};

PropTestEqualContext.prototype.EQ = function() {
    return this.getToken(STIXPatternParser.EQ, 0);
};

PropTestEqualContext.prototype.NEQ = function() {
    return this.getToken(STIXPatternParser.NEQ, 0);
};

PropTestEqualContext.prototype.NOT = function() {
    return this.getToken(STIXPatternParser.NOT, 0);
};
PropTestEqualContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestEqual(this);
	}
};

PropTestEqualContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestEqual(this);
	}
};


function PropTestSetContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestSetContext.prototype = Object.create(PropTestContext.prototype);
PropTestSetContext.prototype.constructor = PropTestSetContext;

STIXPatternParser.PropTestSetContext = PropTestSetContext;

PropTestSetContext.prototype.objectPath = function() {
    return this.getTypedRuleContext(ObjectPathContext,0);
};

PropTestSetContext.prototype.IN = function() {
    return this.getToken(STIXPatternParser.IN, 0);
};

PropTestSetContext.prototype.setLiteral = function() {
    return this.getTypedRuleContext(SetLiteralContext,0);
};

PropTestSetContext.prototype.NOT = function() {
    return this.getToken(STIXPatternParser.NOT, 0);
};
PropTestSetContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestSet(this);
	}
};

PropTestSetContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestSet(this);
	}
};


function PropTestIsSubsetContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestIsSubsetContext.prototype = Object.create(PropTestContext.prototype);
PropTestIsSubsetContext.prototype.constructor = PropTestIsSubsetContext;

STIXPatternParser.PropTestIsSubsetContext = PropTestIsSubsetContext;

PropTestIsSubsetContext.prototype.objectPath = function() {
    return this.getTypedRuleContext(ObjectPathContext,0);
};

PropTestIsSubsetContext.prototype.ISSUBSET = function() {
    return this.getToken(STIXPatternParser.ISSUBSET, 0);
};

PropTestIsSubsetContext.prototype.StringLiteral = function() {
    return this.getToken(STIXPatternParser.StringLiteral, 0);
};

PropTestIsSubsetContext.prototype.NOT = function() {
    return this.getToken(STIXPatternParser.NOT, 0);
};
PropTestIsSubsetContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestIsSubset(this);
	}
};

PropTestIsSubsetContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestIsSubset(this);
	}
};


function PropTestParenContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestParenContext.prototype = Object.create(PropTestContext.prototype);
PropTestParenContext.prototype.constructor = PropTestParenContext;

STIXPatternParser.PropTestParenContext = PropTestParenContext;

PropTestParenContext.prototype.LPAREN = function() {
    return this.getToken(STIXPatternParser.LPAREN, 0);
};

PropTestParenContext.prototype.comparisonExpression = function() {
    return this.getTypedRuleContext(ComparisonExpressionContext,0);
};

PropTestParenContext.prototype.RPAREN = function() {
    return this.getToken(STIXPatternParser.RPAREN, 0);
};
PropTestParenContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestParen(this);
	}
};

PropTestParenContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestParen(this);
	}
};


function PropTestIsSupersetContext(parser, ctx) {
	PropTestContext.call(this, parser);
    PropTestContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PropTestIsSupersetContext.prototype = Object.create(PropTestContext.prototype);
PropTestIsSupersetContext.prototype.constructor = PropTestIsSupersetContext;

STIXPatternParser.PropTestIsSupersetContext = PropTestIsSupersetContext;

PropTestIsSupersetContext.prototype.objectPath = function() {
    return this.getTypedRuleContext(ObjectPathContext,0);
};

PropTestIsSupersetContext.prototype.ISSUPERSET = function() {
    return this.getToken(STIXPatternParser.ISSUPERSET, 0);
};

PropTestIsSupersetContext.prototype.StringLiteral = function() {
    return this.getToken(STIXPatternParser.StringLiteral, 0);
};

PropTestIsSupersetContext.prototype.NOT = function() {
    return this.getToken(STIXPatternParser.NOT, 0);
};
PropTestIsSupersetContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPropTestIsSuperset(this);
	}
};

PropTestIsSupersetContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPropTestIsSuperset(this);
	}
};



STIXPatternParser.PropTestContext = PropTestContext;

STIXPatternParser.prototype.propTest = function() {

    var localctx = new PropTestContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, STIXPatternParser.RULE_propTest);
    var _la = 0; // Token type
    try {
        this.state = 169;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,15,this._ctx);
        switch(la_) {
        case 1:
            localctx = new PropTestEqualContext(this, localctx);
            this.enterOuterAlt(localctx, 1);
            this.state = 116;
            this.objectPath();
            this.state = 118;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STIXPatternParser.NOT) {
                this.state = 117;
                this.match(STIXPatternParser.NOT);
            }

            this.state = 120;
            _la = this._input.LA(1);
            if(!(_la===STIXPatternParser.EQ || _la===STIXPatternParser.NEQ)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 121;
            this.primitiveLiteral();
            break;

        case 2:
            localctx = new PropTestOrderContext(this, localctx);
            this.enterOuterAlt(localctx, 2);
            this.state = 123;
            this.objectPath();
            this.state = 125;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STIXPatternParser.NOT) {
                this.state = 124;
                this.match(STIXPatternParser.NOT);
            }

            this.state = 127;
            _la = this._input.LA(1);
            if(!(((((_la - 32)) & ~0x1f) == 0 && ((1 << (_la - 32)) & ((1 << (STIXPatternParser.LT - 32)) | (1 << (STIXPatternParser.LE - 32)) | (1 << (STIXPatternParser.GT - 32)) | (1 << (STIXPatternParser.GE - 32)))) !== 0))) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 128;
            this.orderableLiteral();
            break;

        case 3:
            localctx = new PropTestSetContext(this, localctx);
            this.enterOuterAlt(localctx, 3);
            this.state = 130;
            this.objectPath();
            this.state = 132;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STIXPatternParser.NOT) {
                this.state = 131;
                this.match(STIXPatternParser.NOT);
            }

            this.state = 134;
            this.match(STIXPatternParser.IN);
            this.state = 135;
            this.setLiteral();
            break;

        case 4:
            localctx = new PropTestLikeContext(this, localctx);
            this.enterOuterAlt(localctx, 4);
            this.state = 137;
            this.objectPath();
            this.state = 139;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STIXPatternParser.NOT) {
                this.state = 138;
                this.match(STIXPatternParser.NOT);
            }

            this.state = 141;
            this.match(STIXPatternParser.LIKE);
            this.state = 142;
            this.match(STIXPatternParser.StringLiteral);
            break;

        case 5:
            localctx = new PropTestRegexContext(this, localctx);
            this.enterOuterAlt(localctx, 5);
            this.state = 144;
            this.objectPath();
            this.state = 146;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STIXPatternParser.NOT) {
                this.state = 145;
                this.match(STIXPatternParser.NOT);
            }

            this.state = 148;
            this.match(STIXPatternParser.MATCHES);
            this.state = 149;
            this.match(STIXPatternParser.StringLiteral);
            break;

        case 6:
            localctx = new PropTestIsSubsetContext(this, localctx);
            this.enterOuterAlt(localctx, 6);
            this.state = 151;
            this.objectPath();
            this.state = 153;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STIXPatternParser.NOT) {
                this.state = 152;
                this.match(STIXPatternParser.NOT);
            }

            this.state = 155;
            this.match(STIXPatternParser.ISSUBSET);
            this.state = 156;
            this.match(STIXPatternParser.StringLiteral);
            break;

        case 7:
            localctx = new PropTestIsSupersetContext(this, localctx);
            this.enterOuterAlt(localctx, 7);
            this.state = 158;
            this.objectPath();
            this.state = 160;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===STIXPatternParser.NOT) {
                this.state = 159;
                this.match(STIXPatternParser.NOT);
            }

            this.state = 162;
            this.match(STIXPatternParser.ISSUPERSET);
            this.state = 163;
            this.match(STIXPatternParser.StringLiteral);
            break;

        case 8:
            localctx = new PropTestParenContext(this, localctx);
            this.enterOuterAlt(localctx, 8);
            this.state = 165;
            this.match(STIXPatternParser.LPAREN);
            this.state = 166;
            this.comparisonExpression(0);
            this.state = 167;
            this.match(STIXPatternParser.RPAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function StartStopQualifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_startStopQualifier;
    return this;
}

StartStopQualifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
StartStopQualifierContext.prototype.constructor = StartStopQualifierContext;

StartStopQualifierContext.prototype.START = function() {
    return this.getToken(STIXPatternParser.START, 0);
};

StartStopQualifierContext.prototype.TimestampLiteral = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STIXPatternParser.TimestampLiteral);
    } else {
        return this.getToken(STIXPatternParser.TimestampLiteral, i);
    }
};


StartStopQualifierContext.prototype.STOP = function() {
    return this.getToken(STIXPatternParser.STOP, 0);
};

StartStopQualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterStartStopQualifier(this);
	}
};

StartStopQualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitStartStopQualifier(this);
	}
};




STIXPatternParser.StartStopQualifierContext = StartStopQualifierContext;

STIXPatternParser.prototype.startStopQualifier = function() {

    var localctx = new StartStopQualifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, STIXPatternParser.RULE_startStopQualifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 171;
        this.match(STIXPatternParser.START);
        this.state = 172;
        this.match(STIXPatternParser.TimestampLiteral);
        this.state = 173;
        this.match(STIXPatternParser.STOP);
        this.state = 174;
        this.match(STIXPatternParser.TimestampLiteral);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function WithinQualifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_withinQualifier;
    return this;
}

WithinQualifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
WithinQualifierContext.prototype.constructor = WithinQualifierContext;

WithinQualifierContext.prototype.WITHIN = function() {
    return this.getToken(STIXPatternParser.WITHIN, 0);
};

WithinQualifierContext.prototype.SECONDS = function() {
    return this.getToken(STIXPatternParser.SECONDS, 0);
};

WithinQualifierContext.prototype.IntPosLiteral = function() {
    return this.getToken(STIXPatternParser.IntPosLiteral, 0);
};

WithinQualifierContext.prototype.FloatPosLiteral = function() {
    return this.getToken(STIXPatternParser.FloatPosLiteral, 0);
};

WithinQualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterWithinQualifier(this);
	}
};

WithinQualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitWithinQualifier(this);
	}
};




STIXPatternParser.WithinQualifierContext = WithinQualifierContext;

STIXPatternParser.prototype.withinQualifier = function() {

    var localctx = new WithinQualifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, STIXPatternParser.RULE_withinQualifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 176;
        this.match(STIXPatternParser.WITHIN);
        this.state = 177;
        _la = this._input.LA(1);
        if(!(_la===STIXPatternParser.IntPosLiteral || _la===STIXPatternParser.FloatPosLiteral)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
        this.state = 178;
        this.match(STIXPatternParser.SECONDS);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function RepeatedQualifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_repeatedQualifier;
    return this;
}

RepeatedQualifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
RepeatedQualifierContext.prototype.constructor = RepeatedQualifierContext;

RepeatedQualifierContext.prototype.REPEATS = function() {
    return this.getToken(STIXPatternParser.REPEATS, 0);
};

RepeatedQualifierContext.prototype.IntPosLiteral = function() {
    return this.getToken(STIXPatternParser.IntPosLiteral, 0);
};

RepeatedQualifierContext.prototype.TIMES = function() {
    return this.getToken(STIXPatternParser.TIMES, 0);
};

RepeatedQualifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterRepeatedQualifier(this);
	}
};

RepeatedQualifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitRepeatedQualifier(this);
	}
};




STIXPatternParser.RepeatedQualifierContext = RepeatedQualifierContext;

STIXPatternParser.prototype.repeatedQualifier = function() {

    var localctx = new RepeatedQualifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, STIXPatternParser.RULE_repeatedQualifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 180;
        this.match(STIXPatternParser.REPEATS);
        this.state = 181;
        this.match(STIXPatternParser.IntPosLiteral);
        this.state = 182;
        this.match(STIXPatternParser.TIMES);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectPathContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_objectPath;
    return this;
}

ObjectPathContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectPathContext.prototype.constructor = ObjectPathContext;

ObjectPathContext.prototype.objectType = function() {
    return this.getTypedRuleContext(ObjectTypeContext,0);
};

ObjectPathContext.prototype.COLON = function() {
    return this.getToken(STIXPatternParser.COLON, 0);
};

ObjectPathContext.prototype.firstPathComponent = function() {
    return this.getTypedRuleContext(FirstPathComponentContext,0);
};

ObjectPathContext.prototype.objectPathComponent = function() {
    return this.getTypedRuleContext(ObjectPathComponentContext,0);
};

ObjectPathContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObjectPath(this);
	}
};

ObjectPathContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObjectPath(this);
	}
};




STIXPatternParser.ObjectPathContext = ObjectPathContext;

STIXPatternParser.prototype.objectPath = function() {

    var localctx = new ObjectPathContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, STIXPatternParser.RULE_objectPath);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 184;
        this.objectType();
        this.state = 185;
        this.match(STIXPatternParser.COLON);
        this.state = 186;
        this.firstPathComponent();
        this.state = 188;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===STIXPatternParser.DOT || _la===STIXPatternParser.LBRACK) {
            this.state = 187;
            this.objectPathComponent(0);
        }

    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectTypeContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_objectType;
    return this;
}

ObjectTypeContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectTypeContext.prototype.constructor = ObjectTypeContext;

ObjectTypeContext.prototype.IdentifierWithoutHyphen = function() {
    return this.getToken(STIXPatternParser.IdentifierWithoutHyphen, 0);
};

ObjectTypeContext.prototype.IdentifierWithHyphen = function() {
    return this.getToken(STIXPatternParser.IdentifierWithHyphen, 0);
};

ObjectTypeContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterObjectType(this);
	}
};

ObjectTypeContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitObjectType(this);
	}
};




STIXPatternParser.ObjectTypeContext = ObjectTypeContext;

STIXPatternParser.prototype.objectType = function() {

    var localctx = new ObjectTypeContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, STIXPatternParser.RULE_objectType);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 190;
        _la = this._input.LA(1);
        if(!(_la===STIXPatternParser.IdentifierWithoutHyphen || _la===STIXPatternParser.IdentifierWithHyphen)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FirstPathComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_firstPathComponent;
    return this;
}

FirstPathComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FirstPathComponentContext.prototype.constructor = FirstPathComponentContext;

FirstPathComponentContext.prototype.IdentifierWithoutHyphen = function() {
    return this.getToken(STIXPatternParser.IdentifierWithoutHyphen, 0);
};

FirstPathComponentContext.prototype.StringLiteral = function() {
    return this.getToken(STIXPatternParser.StringLiteral, 0);
};

FirstPathComponentContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterFirstPathComponent(this);
	}
};

FirstPathComponentContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitFirstPathComponent(this);
	}
};




STIXPatternParser.FirstPathComponentContext = FirstPathComponentContext;

STIXPatternParser.prototype.firstPathComponent = function() {

    var localctx = new FirstPathComponentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, STIXPatternParser.RULE_firstPathComponent);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
        _la = this._input.LA(1);
        if(!(_la===STIXPatternParser.StringLiteral || _la===STIXPatternParser.IdentifierWithoutHyphen)) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function ObjectPathComponentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_objectPathComponent;
    return this;
}

ObjectPathComponentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ObjectPathComponentContext.prototype.constructor = ObjectPathComponentContext;


 
ObjectPathComponentContext.prototype.copyFrom = function(ctx) {
    antlr4.ParserRuleContext.prototype.copyFrom.call(this, ctx);
};

function IndexPathStepContext(parser, ctx) {
	ObjectPathComponentContext.call(this, parser);
    ObjectPathComponentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

IndexPathStepContext.prototype = Object.create(ObjectPathComponentContext.prototype);
IndexPathStepContext.prototype.constructor = IndexPathStepContext;

STIXPatternParser.IndexPathStepContext = IndexPathStepContext;

IndexPathStepContext.prototype.LBRACK = function() {
    return this.getToken(STIXPatternParser.LBRACK, 0);
};

IndexPathStepContext.prototype.RBRACK = function() {
    return this.getToken(STIXPatternParser.RBRACK, 0);
};

IndexPathStepContext.prototype.IntPosLiteral = function() {
    return this.getToken(STIXPatternParser.IntPosLiteral, 0);
};

IndexPathStepContext.prototype.IntNegLiteral = function() {
    return this.getToken(STIXPatternParser.IntNegLiteral, 0);
};

IndexPathStepContext.prototype.ASTERISK = function() {
    return this.getToken(STIXPatternParser.ASTERISK, 0);
};
IndexPathStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterIndexPathStep(this);
	}
};

IndexPathStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitIndexPathStep(this);
	}
};


function PathStepContext(parser, ctx) {
	ObjectPathComponentContext.call(this, parser);
    ObjectPathComponentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

PathStepContext.prototype = Object.create(ObjectPathComponentContext.prototype);
PathStepContext.prototype.constructor = PathStepContext;

STIXPatternParser.PathStepContext = PathStepContext;

PathStepContext.prototype.objectPathComponent = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ObjectPathComponentContext);
    } else {
        return this.getTypedRuleContext(ObjectPathComponentContext,i);
    }
};
PathStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPathStep(this);
	}
};

PathStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPathStep(this);
	}
};


function KeyPathStepContext(parser, ctx) {
	ObjectPathComponentContext.call(this, parser);
    ObjectPathComponentContext.prototype.copyFrom.call(this, ctx);
    return this;
}

KeyPathStepContext.prototype = Object.create(ObjectPathComponentContext.prototype);
KeyPathStepContext.prototype.constructor = KeyPathStepContext;

STIXPatternParser.KeyPathStepContext = KeyPathStepContext;

KeyPathStepContext.prototype.IdentifierWithoutHyphen = function() {
    return this.getToken(STIXPatternParser.IdentifierWithoutHyphen, 0);
};

KeyPathStepContext.prototype.StringLiteral = function() {
    return this.getToken(STIXPatternParser.StringLiteral, 0);
};
KeyPathStepContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterKeyPathStep(this);
	}
};

KeyPathStepContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitKeyPathStep(this);
	}
};



STIXPatternParser.prototype.objectPathComponent = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ObjectPathComponentContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 28;
    this.enterRecursionRule(localctx, 28, STIXPatternParser.RULE_objectPathComponent, _p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 200;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case STIXPatternParser.DOT:
            localctx = new KeyPathStepContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;

            this.state = 195;
            this.match(STIXPatternParser.DOT);
            this.state = 196;
            _la = this._input.LA(1);
            if(!(_la===STIXPatternParser.StringLiteral || _la===STIXPatternParser.IdentifierWithoutHyphen)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            break;
        case STIXPatternParser.LBRACK:
            localctx = new IndexPathStepContext(this, localctx);
            this._ctx = localctx;
            _prevctx = localctx;
            this.state = 197;
            this.match(STIXPatternParser.LBRACK);
            this.state = 198;
            _la = this._input.LA(1);
            if(!(_la===STIXPatternParser.IntNegLiteral || _la===STIXPatternParser.IntPosLiteral || _la===STIXPatternParser.ASTERISK)) {
            this._errHandler.recoverInline(this);
            }
            else {
            	this._errHandler.reportMatch(this);
                this.consume();
            }
            this.state = 199;
            this.match(STIXPatternParser.RBRACK);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 206;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new PathStepContext(this, new ObjectPathComponentContext(this, _parentctx, _parentState));
                this.pushNewRecursionContext(localctx, _startState, STIXPatternParser.RULE_objectPathComponent);
                this.state = 202;
                if (!( this.precpred(this._ctx, 3))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
                }
                this.state = 203;
                this.objectPathComponent(4); 
            }
            this.state = 208;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function SetLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_setLiteral;
    return this;
}

SetLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SetLiteralContext.prototype.constructor = SetLiteralContext;

SetLiteralContext.prototype.LPAREN = function() {
    return this.getToken(STIXPatternParser.LPAREN, 0);
};

SetLiteralContext.prototype.RPAREN = function() {
    return this.getToken(STIXPatternParser.RPAREN, 0);
};

SetLiteralContext.prototype.primitiveLiteral = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(PrimitiveLiteralContext);
    } else {
        return this.getTypedRuleContext(PrimitiveLiteralContext,i);
    }
};

SetLiteralContext.prototype.COMMA = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(STIXPatternParser.COMMA);
    } else {
        return this.getToken(STIXPatternParser.COMMA, i);
    }
};


SetLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterSetLiteral(this);
	}
};

SetLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitSetLiteral(this);
	}
};




STIXPatternParser.SetLiteralContext = SetLiteralContext;

STIXPatternParser.prototype.setLiteral = function() {

    var localctx = new SetLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, STIXPatternParser.RULE_setLiteral);
    var _la = 0; // Token type
    try {
        this.state = 222;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,20,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 209;
            this.match(STIXPatternParser.LPAREN);
            this.state = 210;
            this.match(STIXPatternParser.RPAREN);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 211;
            this.match(STIXPatternParser.LPAREN);
            this.state = 212;
            this.primitiveLiteral();
            this.state = 217;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===STIXPatternParser.COMMA) {
                this.state = 213;
                this.match(STIXPatternParser.COMMA);
                this.state = 214;
                this.primitiveLiteral();
                this.state = 219;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 220;
            this.match(STIXPatternParser.RPAREN);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function PrimitiveLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_primitiveLiteral;
    return this;
}

PrimitiveLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimitiveLiteralContext.prototype.constructor = PrimitiveLiteralContext;

PrimitiveLiteralContext.prototype.orderableLiteral = function() {
    return this.getTypedRuleContext(OrderableLiteralContext,0);
};

PrimitiveLiteralContext.prototype.BoolLiteral = function() {
    return this.getToken(STIXPatternParser.BoolLiteral, 0);
};

PrimitiveLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterPrimitiveLiteral(this);
	}
};

PrimitiveLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitPrimitiveLiteral(this);
	}
};




STIXPatternParser.PrimitiveLiteralContext = PrimitiveLiteralContext;

STIXPatternParser.prototype.primitiveLiteral = function() {

    var localctx = new PrimitiveLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, STIXPatternParser.RULE_primitiveLiteral);
    try {
        this.state = 226;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case STIXPatternParser.IntNegLiteral:
        case STIXPatternParser.IntPosLiteral:
        case STIXPatternParser.FloatNegLiteral:
        case STIXPatternParser.FloatPosLiteral:
        case STIXPatternParser.HexLiteral:
        case STIXPatternParser.BinaryLiteral:
        case STIXPatternParser.StringLiteral:
        case STIXPatternParser.TimestampLiteral:
            this.enterOuterAlt(localctx, 1);
            this.state = 224;
            this.orderableLiteral();
            break;
        case STIXPatternParser.BoolLiteral:
            this.enterOuterAlt(localctx, 2);
            this.state = 225;
            this.match(STIXPatternParser.BoolLiteral);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function OrderableLiteralContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = STIXPatternParser.RULE_orderableLiteral;
    return this;
}

OrderableLiteralContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
OrderableLiteralContext.prototype.constructor = OrderableLiteralContext;

OrderableLiteralContext.prototype.IntPosLiteral = function() {
    return this.getToken(STIXPatternParser.IntPosLiteral, 0);
};

OrderableLiteralContext.prototype.IntNegLiteral = function() {
    return this.getToken(STIXPatternParser.IntNegLiteral, 0);
};

OrderableLiteralContext.prototype.FloatPosLiteral = function() {
    return this.getToken(STIXPatternParser.FloatPosLiteral, 0);
};

OrderableLiteralContext.prototype.FloatNegLiteral = function() {
    return this.getToken(STIXPatternParser.FloatNegLiteral, 0);
};

OrderableLiteralContext.prototype.StringLiteral = function() {
    return this.getToken(STIXPatternParser.StringLiteral, 0);
};

OrderableLiteralContext.prototype.BinaryLiteral = function() {
    return this.getToken(STIXPatternParser.BinaryLiteral, 0);
};

OrderableLiteralContext.prototype.HexLiteral = function() {
    return this.getToken(STIXPatternParser.HexLiteral, 0);
};

OrderableLiteralContext.prototype.TimestampLiteral = function() {
    return this.getToken(STIXPatternParser.TimestampLiteral, 0);
};

OrderableLiteralContext.prototype.enterRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.enterOrderableLiteral(this);
	}
};

OrderableLiteralContext.prototype.exitRule = function(listener) {
    if(listener instanceof STIXPatternListener ) {
        listener.exitOrderableLiteral(this);
	}
};




STIXPatternParser.OrderableLiteralContext = OrderableLiteralContext;

STIXPatternParser.prototype.orderableLiteral = function() {

    var localctx = new OrderableLiteralContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, STIXPatternParser.RULE_orderableLiteral);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 228;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << STIXPatternParser.IntNegLiteral) | (1 << STIXPatternParser.IntPosLiteral) | (1 << STIXPatternParser.FloatNegLiteral) | (1 << STIXPatternParser.FloatPosLiteral) | (1 << STIXPatternParser.HexLiteral) | (1 << STIXPatternParser.BinaryLiteral) | (1 << STIXPatternParser.StringLiteral) | (1 << STIXPatternParser.TimestampLiteral))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


STIXPatternParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.observationExpressions_sempred(localctx, predIndex);
	case 2:
			return this.observationExpressionOr_sempred(localctx, predIndex);
	case 3:
			return this.observationExpressionAnd_sempred(localctx, predIndex);
	case 4:
			return this.observationExpression_sempred(localctx, predIndex);
	case 5:
			return this.comparisonExpression_sempred(localctx, predIndex);
	case 6:
			return this.comparisonExpressionAnd_sempred(localctx, predIndex);
	case 14:
			return this.objectPathComponent_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

STIXPatternParser.prototype.observationExpressions_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

STIXPatternParser.prototype.observationExpressionOr_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 1:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

STIXPatternParser.prototype.observationExpressionAnd_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

STIXPatternParser.prototype.observationExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 3:
			return this.precpred(this._ctx, 3);
		case 4:
			return this.precpred(this._ctx, 2);
		case 5:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

STIXPatternParser.prototype.comparisonExpression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 6:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

STIXPatternParser.prototype.comparisonExpressionAnd_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 7:
			return this.precpred(this._ctx, 2);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

STIXPatternParser.prototype.objectPathComponent_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 8:
			return this.precpred(this._ctx, 3);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.STIXPatternParser = STIXPatternParser;
