let assert = require("assert");
let parserFacade = require("../../main/typescript/ParserFacade.js");
let CustomLexer = require("../../../gen/CustomLexer.js")
  .CustomLexer;
function checkToken(tokens, index, typeName, column, text) {
  it("should have " + typeName + " in position " + index, function () {
    assert.equal(tokens[index].type, CustomLexer[typeName]);
    assert.equal(tokens[index].column, column);
    assert.equal(tokens[index].text, text);
  });
}
describe("Basic lexing without spaces", function () {
  console.log(parserFacade.text)
  let tokens = parserFacade.getTokens("aa");
  it("should return 3 tokens", function () {
    assert.equal(tokens.length, 1);
  });
  console.log("hi", tokens);
  checkToken(tokens, 0, "NAME", 0, "a");
  // checkToken(tokens, 1, "EQUAL", 1, "=");
  // checkToken(tokens, 2, "NUMBER_LIT", 2, "5");
});
