module.exports = function token_name (token)  {
  // +   original by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: Token numbers actually depend on the PHP version
  // *     example 1: token_name(258);
  // *     returns 1: 'T_REQUIRE_ONCE'

  var tokens = {
    258: 'T_REQUIRE_ONCE',
    259: 'T_REQUIRE',
    260: 'T_EVAL',
    261: 'T_INCLUDE_ONCE',
    262: 'T_INCLUDE',
    263: 'T_LOGICAL_OR',
    264: 'T_LOGICAL_XOR',
    265: 'T_LOGICAL_AND',
    266: 'T_PRINT',
    267: 'T_SR_EQUAL',
    268: 'T_SL_EQUAL',
    269: 'T_XOR_EQUAL',
    270: 'T_OR_EQUAL',
    271: 'T_AND_EQUAL',
    272: 'T_MOD_EQUAL',
    273: 'T_CONCAT_EQUAL',
    274: 'T_DIV_EQUAL',
    275: 'T_MUL_EQUAL',
    276: 'T_MINUS_EQUAL',
    277: 'T_PLUS_EQUAL',
    278: 'T_BOOLEAN_OR',
    279: 'T_BOOLEAN_AND',
    280: 'T_IS_NOT_IDENTICAL',
    281: 'T_IS_IDENTICAL',
    282: 'T_IS_NOT_EQUAL',
    283: 'T_IS_EQUAL',
    284: 'T_IS_GREATER_OR_EQUAL',
    285: 'T_IS_SMALLER_OR_EQUAL',
    286: 'T_SR',
    287: 'T_SL',
    288: 'T_INSTANCEOF',
    289: 'T_UNSET_CAST',
    290: 'T_BOOL_CAST',
    291: 'T_OBJECT_CAST',
    292: 'T_ARRAY_CAST',
    293: 'T_STRING_CAST',
    294: 'T_DOUBLE_CAST',
    295: 'T_INT_CAST',
    296: 'T_DEC',
    297: 'T_INC',
    298: 'T_CLONE',
    299: 'T_NEW',
    300: 'T_EXIT',
    301: 'T_IF',
    302: 'T_ELSEIF',
    303: 'T_ELSE',
    304: 'T_ENDIF',
    305: 'T_LNUMBER',
    306: 'T_DNUMBER',
    307: 'T_STRING',
    308: 'T_STRING_VARNAME',
    309: 'T_VARIABLE',
    310: 'T_NUM_STRING',
    311: 'T_INLINE_HTML',
    312: 'T_CHARACTER',
    313: 'T_BAD_CHARACTER',
    314: 'T_ENCAPSED_AND_WHITESPACE',
    315: 'T_CONSTANT_ENCAPSED_STRING',
    316: 'T_ECHO',
    317: 'T_DO',
    318: 'T_WHILE',
    319: 'T_ENDWHILE',
    320: 'T_FOR',
    321: 'T_ENDFOR',
    322: 'T_FOREACH',
    323: 'T_ENDFOREACH',
    324: 'T_DECLARE',
    325: 'T_ENDDECLARE',
    326: 'T_AS',
    327: 'T_SWITCH',
    328: 'T_ENDSWITCH',
    329: 'T_CASE',
    330: 'T_DEFAULT',
    331: 'T_BREAK',
    332: 'T_CONTINUE',
    333: 'T_GOTO',
    334: 'T_FUNCTION',
    335: 'T_CONST',
    336: 'T_RETURN',
    337: 'T_TRY',
    338: 'T_CATCH',
    339: 'T_THROW',
    340: 'T_USE',
    341: 'T_GLOBAL',
    342: 'T_PUBLIC',
    343: 'T_PROTECTED',
    344: 'T_PRIVATE',
    345: 'T_FINAL',
    346: 'T_ABSTRACT',
    347: 'T_STATIC',
    348: 'T_VAR',
    349: 'T_UNSET',
    350: 'T_ISSET',
    351: 'T_EMPTY',
    352: 'T_HALT_COMPILER',
    353: 'T_CLASS',
    354: 'T_INTERFACE',
    355: 'T_EXTENDS',
    356: 'T_IMPLEMENTS',
    357: 'T_OBJECT_OPERATOR',
    358: 'T_DOUBLE_ARROW',
    359: 'T_LIST',
    360: 'T_ARRAY',
    361: 'T_CLASS_C',
    362: 'T_METHOD_C',
    363: 'T_FUNC_C',
    364: 'T_LINE',
    365: 'T_FILE',
    366: 'T_COMMENT',
    367: 'T_DOC_COMMENT',
    368: 'T_OPEN_TAG',
    369: 'T_OPEN_TAG_WITH_ECHO',
    370: 'T_CLOSE_TAG',
    371: 'T_WHITESPACE',
    372: 'T_START_HEREDOC',
    373: 'T_END_HEREDOC',
    374: 'T_DOLLAR_OPEN_CURLY_BRACES',
    375: 'T_CURLY_OPEN',
    376: 'T_PAAMAYIM_NEKUDOTAYIM',
    377: 'T_NAMESPACE',
    378: 'T_NS_C',
    379: 'T_DIR',
    380: 'T_NS_SEPARATOR'
  };
  // On PHP 5.2.6 on Windows, these values are returned instead
  /**
   var tokens = {
        258:'T_REQUIRE_ONCE',
        259:'T_REQUIRE',
        260:'T_EVAL',
        261:'T_INCLUDE_ONCE',
        262:'T_INCLUDE',
        263:'T_LOGICAL_OR',
        264:'T_LOGICAL_XOR',
        265:'T_LOGICAL_AND',
        266:'T_PRINT',
        267:'T_SR_EQUAL',
        268:'T_SL_EQUAL',
        269:'T_XOR_EQUAL',
        270:'T_OR_EQUAL',
        271:'T_AND_EQUAL',
        272:'T_MOD_EQUAL',
        273:'T_CONCAT_EQUAL',
        274:'T_DIV_EQUAL',
        275:'T_MUL_EQUAL',
        276:'T_MINUS_EQUAL',
        277:'T_PLUS_EQUAL',
        278:'T_BOOLEAN_OR',
        279:'T_BOOLEAN_AND',
        280:'T_IS_NOT_IDENTICAL',
        281:'T_IS_IDENTICAL',
        282:'T_IS_NOT_EQUAL',
        283:'T_IS_EQUAL',
        284:'T_IS_GREATER_OR_EQUAL',
        285:'T_IS_SMALLER_OR_EQUAL',
        286:'T_SR',
        287:'T_SL',
        288:'T_INSTANCEOF',
        289:'T_UNSET_CAST',
        290:'T_BOOL_CAST',
        291:'T_OBJECT_CAST',
        292:'T_ARRAY_CAST',
        293:'T_STRING_CAST',
        294:'T_DOUBLE_CAST',
        295:'T_INT_CAST',
        296:'T_DEC',
        297:'T_INC',
        298:'T_CLONE',
        299:'T_NEW',
        300:'T_EXIT',
        301:'T_IF',
        302:'T_ELSEIF',
        303:'T_ELSE',
        304:'T_ENDIF',
        305:'T_LNUMBER',
        306:'T_DNUMBER',
        307:'T_STRING',
        308:'T_STRING_VARNAME',
        309:'T_VARIABLE',
        310:'T_NUM_STRING',
        311:'T_INLINE_HTML',
        312:'T_CHARACTER',
        313:'T_BAD_CHARACTER',
        314:'T_ENCAPSED_AND_WHITESPACE',
        315:'T_CONSTANT_ENCAPSED_STRING',
        316:'T_ECHO',
        317:'T_DO',
        318:'T_WHILE',
        319:'T_ENDWHILE',
        320:'T_FOR',
        321:'T_ENDFOR',
        322:'T_FOREACH',
        323:'T_ENDFOREACH',
        324:'T_DECLARE',
        325:'T_ENDDECLARE',
        326:'T_AS',
        327:'T_SWITCH',
        328:'T_ENDSWITCH',
        329:'T_CASE',
        330:'T_DEFAULT',
        331:'T_BREAK',
        332:'T_CONTINUE',
        333:'T_FUNCTION',
        334:'T_CONST',
        335:'T_RETURN',
        336:'T_TRY',
        337:'T_CATCH',
        338:'T_THROW',
        339:'T_USE',
        340:'T_GLOBAL',
        341:'T_PUBLIC',
        342:'T_PROTECTED',
        343:'T_PRIVATE',
        344:'T_FINAL',
        345:'T_ABSTRACT',
        346:'T_STATIC',
        347:'T_VAR',
        348:'T_UNSET',
        349:'T_ISSET',
        350:'T_EMPTY',
        351:'T_HALT_COMPILER',
        352:'T_CLASS',
        353:'T_INTERFACE',
        354:'T_EXTENDS',
        355:'T_IMPLEMENTS',
        356:'T_OBJECT_OPERATOR',
        357:'T_DOUBLE_ARROW',
        358:'T_LIST',
        359:'T_ARRAY',
        360:'T_CLASS_C',
        361:'T_METHOD_C',
        362:'T_FUNC_C',
        363:'T_LINE',
        364:'T_FILE',
        365:'T_COMMENT',
        366:'T_DOC_COMMENT',
        367:'T_OPEN_TAG',
        368:'T_OPEN_TAG_WITH_ECHO',
        369:'T_CLOSE_TAG',
        370:'T_WHITESPACE',
        371:'T_START_HEREDOC',
        372:'T_END_HEREDOC',
        373:'T_DOLLAR_OPEN_CURLY_BRACES',
        374:'T_CURLY_OPEN',
        375:'T_DOUBLE_COLON',
        376:'UNKNOWN',
        377:'UNKNOWN',
        378:'UNKNOWN',
        379:'UNKNOWN',
        380:'UNKNOWN'
   };
//*/
  return tokens[token];
}
