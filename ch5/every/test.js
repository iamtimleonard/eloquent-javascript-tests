const every = require("./index");

describe("every", () => {
  test("returns a boolean", () => {
    expect(every([], (n) => n < 10)).toEqual(expect.any(Boolean));
  });
  test("tests array of numbers", () => {
    expect(every([1, 3, 5], (n) => n < 10)).toBe(true);
  });
  test("tests array of numbers", () => {
    expect(every([2, 4, 16], (n) => n < 10)).toBe(false);
  });
  test("tests empty array", () => {
    expect(every([], (n) => n < 10)).toBe(true);
  });
});
