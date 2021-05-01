const loop = require("./index");

jest.spyOn(console, "log").mockImplementation();

describe("loop", () => {
  test("prints to console 3 times", () => {
    loop(
      3,
      (n) => n > 0,
      (n) => n - 1,
      console.log
    );
    expect(console.log).toBeCalledTimes(3);
  });
  test("prints 3, 2, 1", () => {
    loop(
      3,
      (n) => n > 0,
      (n) => n - 1,
      console.log
    );
    expect(console.log).toHaveBeenNthCalledWith(4, 3);
    expect(console.log).toHaveBeenNthCalledWith(5, 2);
    expect(console.log).toHaveBeenNthCalledWith(6, 1);
  });
  test("prints 4, 5, 6", () => {
    loop(
      4,
      (n) => n < 7,
      (n) => n + 1,
      console.log
    );
    expect(console.log).toHaveBeenNthCalledWith(7, 4);
    expect(console.log).toHaveBeenNthCalledWith(8, 5);
    expect(console.log).toHaveBeenNthCalledWith(9, 6);
  });
  test("prints 'hello''world", () => {
    const array = ["hello", "world"];
    loop(
      0,
      (n) => n < array.length,
      (n) => n + 1,
      (i) => console.log(array[i])
    );
    expect(console.log).toHaveBeenNthCalledWith(10, "hello");
    expect(console.log).toHaveBeenNthCalledWith(11, "world");
  });
});
