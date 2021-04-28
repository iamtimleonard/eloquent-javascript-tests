const { reverseArray, reverseArrayInPlace } = require("./index");

let arrayValue;

beforeEach(() => {
  arrayValue = [1, 2, 3, 4, 5];
});

describe("reverseArray", () => {
  test("returns an array", () => {
    expect(reverseArray(arrayValue)).toStrictEqual(expect.any(Array));
  });
  test("moves first element to last", () => {
    expect(reverseArray(arrayValue)[4]).toStrictEqual(1);
  });
  test("moves last element to first", () => {
    expect(reverseArray(arrayValue)[0]).toStrictEqual(5);
  });
  test("does not change original array", () => {
    expect(reverseArray(arrayValue)).not.toStrictEqual(arrayValue);
  });
});

describe("reverseArrayInPlace", () => {
  test("does not return a new array", () => {
    expect(reverseArrayInPlace(arrayValue)).toStrictEqual(undefined);
  });
  test("moves first element to last", () => {
    reverseArrayInPlace(arrayValue);
    expect(arrayValue[4]).toStrictEqual(1);
  });
  test("moves last element to first", () => {
    reverseArrayInPlace(arrayValue);
    expect(arrayValue[0]).toStrictEqual(5);
  });
  test("changes orignal array", () => {
    reverseArrayInPlace(arrayValue);
    expect(arrayValue).toStrictEqual(arrayValue);
  });
});
