const { range, sum, bonus } = require("./index");

describe("range function", () => {
  test("returns an array", () => {
    expect(range(1, 10)).toStrictEqual(expect.any(Array));
  });
  test("that starts with first parameter", () => {
    expect(range(1, 10)[0]).toStrictEqual(1);
  });
  test("and ends with second parameter", () => {
    expect(range(1, 100)[99]).toStrictEqual(100);
  });
  test("and includes numbers in between", () => {
    expect(range(1, 10)[3]).toStrictEqual(4);
  });
});

describe("sum function", () => {
  test("returns a single number", () => {
    expect(sum([1, 2])).toStrictEqual(expect.any(Number));
  });
  test("that is the sum of an array of numbers", () => {
    expect(sum([1, 2, 3, 4])).toStrictEqual(10);
  });
  test("and handles negative numbers", () => {
    expect(sum([1, 2, 3, 4, -10])).toStrictEqual(0);
  });
});

describe("bonus function", () => {
  test("returns an array", () => {
    expect(bonus(1, 7, 3)).toStrictEqual(expect.any(Array));
  });
  test("starts with the first parameter", () => {
    expect(bonus(1, 7, 3)[0]).toStrictEqual(1);
  });
  test("ends with the second parameter", () => {
    expect(bonus(1, 7, 3)[2]).toStrictEqual(7);
  });
  test("skips by third parameter", () => {
    expect(bonus(1, 7, 3)[1] - bonus(1, 7, 3)[0]).toStrictEqual(3);
  });
  test("defaults to skipping by one", () => {
    expect(bonus(1, 2)).toStrictEqual([1, 2]);
  });
  test("handles decrement", () => {
    expect(bonus(3, 1, -1)).toStrictEqual([3, 2, 1]);
  });
});
