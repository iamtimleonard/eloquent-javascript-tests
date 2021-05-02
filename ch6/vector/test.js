const Vec = require("./index");

describe("Vector", () => {
  test("has x and y properties", () => {
    const testVec = new Vec(1, 2);
    expect(testVec.hasOwnProperty("x")).toBe(true);
    expect(testVec.hasOwnProperty("y")).toBe(true);
  });
  test("plus method", () => {
    const newVec = new Vec(1, 2).plus(new Vec(2, 3));
    expect(newVec.x).toEqual(3);
    expect(newVec.y).toEqual(5);
  });
  test("minus method", () => {
    const newVec = new Vec(1, 2).minus(new Vec(2, 3));
    expect(newVec.x).toEqual(-1);
    expect(newVec.y).toEqual(-1);
  });
  test("get length", () => {
    const testVect = new Vec(3, 4);
    expect(testVect.length).toEqual(5);
  });
});
