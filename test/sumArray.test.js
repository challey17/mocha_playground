const expect = require("chai").expect;
const sum = require("../sumArray");

describe("Array sum", () => {
  it("should return a promise", () => {
    expect(sum([1, 2, 3])).to.be.a("promise");
  });

  it("should sum an array of numbers", () => {
    return (
      sum([1, 2, 3])
        //added .then to check if promise resolves
        //to correct answer
        .then((ans) => {
          expect(ans).to.equal(6);
        })
    );
  });

  it("should sum an array of numbers and numeric strings", () => {
    return sum([1, "2", 3]).then((ans) => {
      expect(ans).to.equal(6);
    });
  });
});
