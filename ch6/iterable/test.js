const Group = require("./index");

jest.spyOn(console, "log").mockImplementation();

test("Group is iterable", () => {
  for (let value of Group.from(["a", "b", "c"])) {
    console.log(value);
  }
  expect(console.log).toBeCalledTimes(3);
});
