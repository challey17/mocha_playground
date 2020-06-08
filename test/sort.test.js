const expect = require("chai").expect;
const sort = require("../sort");

describe("Sort function", () => {
  it("should return the list array in ascending order", () => {
    //expect(sort([3, 2, 1])).to.deep.equal([1, 2, 3]);
    const arr1 = [3, 2, 1];
    //const arr2 = [1,2,3];
    const expectedAnswer = [1, 2, 3];

    const actualAnswer = sort(arr1);

    expect(expectedAnswer).to.deep.equal(actualAnswer);
  });
});
