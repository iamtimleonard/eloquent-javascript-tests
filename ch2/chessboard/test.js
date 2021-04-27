const chessboard = require("./index");

jest.spyOn(console, "log").mockImplementation();

test("prints to the console once", () => {
  chessboard();
  expect(console.log).toBeCalledTimes(1);
});

test("prints a square", () => {
  chessboard();
  let array = console.log.mock.calls[0][0].trimEnd().split(/\n/);
  expect(array[0].length).toEqual(array.length);
  expect(array[1].length).toEqual(array[0].length);
});

test("prints a white square first", () => {
  chessboard();
  expect(console.log.mock.calls[0][0][0]).toEqual(" ");
});

test("prints a black square second", () => {
  chessboard();
  expect(console.log.mock.calls[0][0][1]).toEqual("#");
});
