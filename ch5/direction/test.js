const dominantDirection = require("./index");

describe("dominantDirection", () => {
  test("returns a string", () => {
    expect(dominantDirection("Hello!")).toEqual(expect.any(String));
  });
  test("returns 'ltr'", () => {
    expect(dominantDirection("Hello!")).toEqual("ltr");
  });
  test("returns 'rtl'", () => {
    expect(dominantDirection("Hey, مساء الخير")).toEqual("rtl");
  });
});
