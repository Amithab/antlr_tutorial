import { ANTLRInputStream, Token, CommonTokenStream } from "antlr4ts";
import { CustomLexer } from "../../../gen/CustomLexer";
import { CustomParser } from "../../../gen/CustomParser";
function createLexer(input: string) {
  console.log("starting");
  const chars = new ANTLRInputStream(input);
  const lexer = new CustomLexer(chars);
  console.log(chars)
  console.log(lexer)
  /* console.log(lexer);
  let tokenStream = new CommonTokenStream(lexer);
  console.log(tokenStream);
  console.log("in between");
  console.log(tokenStream.getTokens());
  let end = new CustomParser(tokenStream);
  console.log("e", end);
  console.log(end.currentToken);
  // lexer.strictMode = false;
  let tree = end.expression();
  console.log("t", tree); */
  return lexer;
}
export function getTokens(input: string): Token[] {
  return createLexer(input).getAllTokens();
}

