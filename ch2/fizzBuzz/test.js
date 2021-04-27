const fizzBuzz = require("./index");

jest.spyOn(console, "log").mockImplementation();

test("prints to console 100 times", () => {
  fizzBuzz();
  expect(console.log).toBeCalledTimes(100);
});

test("prints 'Fizz' when divisible by 3", () => {
  fizzBuzz();
  expect(console.log).toHaveBeenNthCalledWith(3, "Fizz");
  expect(console.log).toHaveBeenNthCalledWith(33, "Fizz");
  expect(console.log).toHaveBeenNthCalledWith(99, "Fizz");
});

test("print 'Buzz' when divisible by 5", () => {
  fizzBuzz();
  expect(console.log).toHaveBeenNthCalledWith(5, "Buzz");
  expect(console.log).toHaveBeenNthCalledWith(25, "Buzz");
  expect(console.log).toHaveBeenNthCalledWith(100, "Buzz");
});

test("prints 'FizzBuzz' when divisible by 15", () => {
  fizzBuzz();
  expect(console.log).toHaveBeenNthCalledWith(15, "FizzBuzz");
  expect(console.log).toHaveBeenNthCalledWith(30, "FizzBuzz");
  expect(console.log).toHaveBeenNthCalledWith(75, "FizzBuzz");
});
