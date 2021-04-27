function isEven(N) {
  if (N === 0) {
    return true;
  }
  if (N === 1) {
    return false;
  }
  if (N < 0) {
    N *= -1;
  }
  return isEven(N - 2);
}

module.exports = isEven;
