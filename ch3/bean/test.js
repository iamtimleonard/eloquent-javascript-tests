const { countBs, countChar } = require("./index");

test("countBs returns two B's in BBC", () => {
  expect(countBs("BBC")).toStrictEqual(2);
});

test("-- returns 2 from ' '", () => {
  expect(countBs(" ")).toStrictEqual(0);
});

test("-- returns 1 from 'bbbbbbbbbbbbbbbbbbbbbB'", () => {
  expect(countBs("bbbbbbbbbbbbbbbbbbbbbB")).toStrictEqual(1);
});

test("countChar returns 4 from 'kakkerlak', 'k'", () => {
  expect(countChar("kakkerlak", "k")).toStrictEqual(4);
});

test("countChar returns 2 from 'aAaA', 'A'", () => {
  expect(countChar("aAaA", "A")).toStrictEqual(2);
});
