// Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

// Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?

function reverseArray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result[array.length - i - 1] = array[i];
  }
  return result;
}

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    [array[i], array[array.length - i - 1]] = [
      array[array.length - i - 1],
      array[i],
    ];
  }
  return;
}

module.exports = { reverseArray, reverseArrayInPlace };
