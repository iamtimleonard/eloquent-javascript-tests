const triangle = require("./index");

jest.spyOn(console, "log").mockImplementation();

test("prints a triangle to the console", () => {
  triangle();
  expect(console.log).toBeCalledTimes(7);
  expect(console.log).toHaveBeenCalledWith("#");
  expect(console.log).toHaveBeenCalledWith("#######");
  expect(console.log).not.toHaveBeenCalledWith("");
  expect(console.log).not.toHaveBeenCalledWith("########");
});
