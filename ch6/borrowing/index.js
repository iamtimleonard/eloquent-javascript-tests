let map = { one: true, two: true, hasOwnProperty: true };

function borrowed() {
  //fix the line below
  return map.hasOwnProperty("one");
  //fix the line above
}

module.exports = borrowed;
