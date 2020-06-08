//const divide = require("../index");
// const chai = require("chai");
// const expect = chai.expect;
// becomes one line below
//const expect = require("chai").expect;

// describe("describe one or more test cases", () => {
//   // test specs here
// });
///////////Expanded syntax to show each step/////////////
// describe("Divide function", () => {
//   it("should divide positive intergers correctly", () => {
//     // define inputs
//     const a = 8;
//     const b = 4;
//     const expectedAnswer = 2;

//     // invoke the function
//     const actualAnswer = divide(a, b);

//     // assert that expected === actual( chai is used here)
//     expect(actualAnswer).to.equal(expectedAnswer);
//   });
//   it("should throw an error when dividing by zero", () => {
//     // define inputs
//     const a = 8,
//       b = 0;

//     // set up the function call
//     const fn = () => {
//       divide(a, b);
//     };

//     // assert that exception is thrown
//     expect(fn).to.throw();
//   });
// });

//REFACTORED TO SIMPLIFY CODE
const expect = require("chai").expect;
const divide = require("../index");

describe("Divide function", () => {
  it("should divide positive integers correctly", () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it("should throw an error when divide by zero", () => {
    expect(() => {
      divide(8, 0);
    }).to.throw();
  });
  it("strict equals examples", () => {
    expect(2).to.equal(2, "2 === 2"); // pass
    expect(2).to.equal("2", '2 === "2"'); // fail, wrong types
    expect(2).to.equal(3, "2 === 3"); // fail, wrong values
    expect("hen").to.equal("Hen", "'hen' === 'Hen'"); // fail, string comparison is case sensitive
  });
});
