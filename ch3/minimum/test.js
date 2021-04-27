const min = require("./index");

test("min(0,2) returns 0", () => {
  expect(min(0, 2)).toEqual(0);
});

test("min(2,1) returns 1", () => {
  expect(min(2, 1)).toEqual(1);
});

test("min(500,501) returns 500", () => {
  expect(min(500, 501)).toEqual(500);
});

test("min(5, 5) returns 5", () => {
  expect(min(5, 5)).toEqual(5);
});

test("min(5, '2') returns 2", () => {
  expect(min(5, "2")).toEqual(2);
});

test("min('a', 'b') returns NaN", () => {
  expect(min("a", "b")).toEqual(NaN);
});
