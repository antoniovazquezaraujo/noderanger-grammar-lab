"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parser_1 = require("./parser");
const song_parser_1 = require("./song.parser");
describe("Parsing songs", () => {
    let parser;
    let x = "3 4 2:4 4:2 5:(s 3 4 5 4:2 8:(s 3 4))";
    let y = "9:(3 4 2:4 4:2 5:(17 3 4 5 4:2 8:(s 3 4)))";
    let z = "3:8 5:(s 9)";
    beforeEach(() => {
        parser = new parser_1.Parser(x);
    });
    it('Should be defined', () => {
        console.log("Parser: ", parser);
        let result = parser.parse();
        let x = result.ast;
        if (x) {
            let bits = ((0, song_parser_1.parseBlock)(x, 0, []));
            console.log("bits: ", bits);
        }
    });
});
//# sourceMappingURL=song.parser-spec.js.map