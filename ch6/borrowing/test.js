const borrowed = require("./index");

test("fix hasOwnProperty", () => {
  expect(borrowed()).toBe(true);
});
