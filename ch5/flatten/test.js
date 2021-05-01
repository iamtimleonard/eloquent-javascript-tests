const flatten = require("./index");

let arrays = [[1, 2, 3], [4, 5], [6]];

describe("flatten", () => {
  test("returns an array", () => {
    expect(flatten(arrays)).toEqual(expect.any(Array));
  });
  test("returns no subarrays", () => {
    expect(flatten(arrays)[0]).toEqual(expect.any(Number));
  });
  test("returns the same elements in the same order", () => {
    expect(flatten(arrays)[0]).toStrictEqual(1);
  });
});
