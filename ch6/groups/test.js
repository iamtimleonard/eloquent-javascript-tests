const Group = require("./index");

let group = Group.from([10, 20]);

test("group.has", () => {
  expect(group.has(10)).toBe(true);
});

test("group.has is false", () => {
  expect(group.has(30)).toBe(false);
});

test("group.add does not duplicate value", () => {
  group.add(10);
  group.delete(10);
  expect(group.has(10)).toBe(false);
});
