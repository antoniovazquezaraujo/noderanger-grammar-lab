"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const song_parser_1 = require("./song.parser");
describe("Parsing songs", () => {
    let parser;
    let x = "3 4 2:4 4:2 5:( s 3 4 5 4:2 8:(s 3 4))";
    let y = "9:(3 4 2:4 4:2 5:( s 3 4 5 4:2 8:(s 3 4)))";
    let z = "3:8";
    beforeEach(() => {
        parser = new parser_1.Parser(z);
    });
    it('Should be defined', () => {
        console.log("Parser: ", parser);
        let result = parser.parse();
        let x = result.ast;
        if (x) {
            console.log((0, song_parser_1.parseBlock)(x));
        }
        expect(parser.parse()).toBeDefined();
    });
});
//# sourceMappingURL=song.parser-spec.js.map