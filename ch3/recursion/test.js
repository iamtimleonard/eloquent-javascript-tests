const isEven = require("./index");

test("returns true for 0", () => {
  expect(isEven(0)).toStrictEqual(true);
});

test("returns false for 1", () => {
  expect(isEven(1)).toStrictEqual(false);
});

test("returns true for 420", () => {
  expect(isEven(420)).toStrictEqual(true);
});

test("returns false for 8889", () => {
  expect(isEven(8889)).toStrictEqual(false);
});

test("returns false for -99", () => {
  expect(isEven(-99)).toStrictEqual(false);
});

test("returns true for -9998", () => {
  expect(isEven(-9998)).toStrictEqual(true);
});
