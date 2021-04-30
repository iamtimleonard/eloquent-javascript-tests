const deepEqual = require("./index");

let obj = { here: { is: "an" }, object: 2 };

describe("deepEqual", () => {
  test("returns a boolean", () => {
    expect(deepEqual(obj, obj)).toStrictEqual(expect.any(Boolean));
  });
  test("comparing the same object returns true", () => {
    expect(deepEqual(obj, obj)).toBe(true);
  });
  test("comparing different objects returns false", () => {
    expect(deepEqual(obj, { here: { is: "a" }, object: 2 })).toBe(false);
  });
  test("comparing the same number returns true", () => {
    expect(deepEqual(2, 2)).toBe(true);
  });
  test("comparing the same string returns true", () => {
    expect(deepEqual("hi", "hi")).toBe(true);
  });
  test("comparing different numbers returns false", () => {
    expect(deepEqual(4, 5)).toBe(false);
  });
  test("comparing different strings returns false", () => {
    expect(deepEqual("hello", "world")).toBe(false);
  });
  test("comparing teh same array returns true", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 3])).toBe(true);
  });
  test("comparing different arrays returns false", () => {
    expect(deepEqual([1, 2, 3], [1, 2, 4])).toBe(false);
  });
});
