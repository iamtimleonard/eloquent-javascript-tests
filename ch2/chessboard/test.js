const chessboard = require("./chessboard");

jest.spyOn(console, "log").mockImplementation();

test("prints a white square first", () => {
  chessboard();
  expect(console.log.mock.calls[0][0][0]).toEqual(" ");
});

test("prints a black square second", () => {
  chessboard();
  expect(console.log.mock.calls[0][0][1]).toEqual("#");
});
