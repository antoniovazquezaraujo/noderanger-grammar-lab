// main() {
//     console.log("main");
//     let parser = new Parser(z);
//     const tree = parser.parse();
//     if(tree.ast){
//       console.log("ast:");
//     console.log(parseBlock(tree.ast));
//     }

//   }
//-------------------------------------------------
// src/user-service-spec.ts
//-------------------------------------------------
import { SoundBit } from "./note";
import { Parser } from "./parser";
import { parseBlock } from "./song.parser";
describe("Parsing songs", () => {

  let parser: Parser;
  let x = "3 4 2:4 4:2 5:(s 3 4 5 4:2 8:(s 3 4))";
  let y = "9:(3 4 2:4 4:2 5:(17 3 4 5 4:2 8:(s 3 4)))";
  let z = "3:8 5:(s 9)";

  // For every test case we need UserService instance so before running each test case the UserService instance will be created
  beforeEach(() => {
    parser = new Parser(x);

  });

  // Test case to ensure getUsers method is defined
  it('Should be defined', () => {
    console.log("Parser: ", parser);
    let result = parser.parse();
    let x = result.ast;
    if (x) {
      let bits:SoundBit[] =(parseBlock(x, 0, []));
      console.log("bits: ", bits); 
    }
    //expect(parser.parse()).toBeDefined();
  });
  // Test case to ensure getUsers method returns Array object
  //    it('Should return Array', () => {
  //       expect(userService.getUsers()).toEqual(jasmine.arrayContaining([]) );
  //    });
  //    // Test case to ensure getUsers method returns Array containing specific object property and value
  //    it('Should return Array containing "name" property and value as "batman"', () => {
  //       expect(userService.getUsers()).toContain({'name': 'batman'});
  //    });
});