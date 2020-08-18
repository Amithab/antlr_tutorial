/*grammar Custom;

expression: 
    NAME
    ;

NAME: [a-z] ;

UNRECOGNIZED : . ;
*/

grammar Custom;
r   : 'hello' ID;
ID  : [a-z]+ ;
WS  : [ \t\r\n]+ -> skip ;