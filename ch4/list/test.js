const { arrayToList, listToArray, prepend, nth } = require("./index");

let testList = {};
beforeEach(() => {
  return (testList = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null,
      },
    },
  });
});

describe("arrayToList", () => {
  test("returns an object", () => {
    expect(arrayToList([1, 2, 3])).toEqual(expect.any(Object));
  });
  test("first item value is 1", () => {
    expect(arrayToList([1, 2, 3]).value).toEqual(1);
  });
  test("second value is 2", () => {
    expect(arrayToList([1, 2, 3]).rest.value).toEqual(2);
  });
  test("third value is 3", () => {
    expect(arrayToList([1, 2, 3]).rest.rest.value).toEqual(3);
  });
});

describe("listToArray", () => {
  test("returns an array", () => {
    expect(listToArray(testList)).toEqual(expect.any(Array));
  });
  test("first array element is 1", () => {
    expect(listToArray(testList)[0]).toStrictEqual(1);
  });
  test("second array element is 2", () => {
    expect(listToArray(testList)[1]).toStrictEqual(2);
  });
  test("third array element is 3", () => {
    expect(listToArray(testList)[2]).toStrictEqual(3);
  });
});

describe("prepend", () => {
  test("returns a list", () => {
    expect(prepend({ value: 0, rest: null }, testList)).toEqual(
      expect.any(Object)
    );
  });
  test("prepends an item", () => {
    expect(prepend({ value: 0, rest: null }, testList).value).toEqual(0);
  });
  test("moves original first item", () => {
    expect(prepend({ value: 0, rest: null }, testList).rest.value).toEqual(1);
  });
});

describe("nth", () => {
  test("returns a list item", () => {
    expect(nth(testList, 0)).toEqual(expect.any(Object));
  });
  test("returns 0th list item", () => {
    expect(nth(testList, 0).value).toEqual(1);
  });
  test("returns 1st list item", () => {
    expect(nth(testList, 1).value).toEqual(2);
  });
  test("returns 2nd list item", () => {
    expect(nth(testList, 2).value).toEqual(3);
  });
});
