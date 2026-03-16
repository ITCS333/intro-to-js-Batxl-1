/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  // TODO: Implement this function.
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  
  return a + b;
}
}

/**
 * @param {string} str The string to reverse.
 * @returns {string} The reversed string.
 */
function reverseString(str) {
  // TODO: Implement this function.
  function reverseString(str) {
  return str.split('').reverse().join('');
}
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number} The largest number in the array. Return null if the array is empty.
 */
function findLargest(numbers) {
  // TODO: Implement this function.
 function findLargest(numbers) {

  if (!Array.isArray(numbers) || numbers.length === 0) return null;
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number' && numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}
}


/**
 * @param {string} str The string to check.
 * @returns {boolean} True if the string is a palindrome, false otherwise.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward, e.g., madam or racecar.
 * The check should be case-insensitive.
 */
function isPalindrome(str) {
  // TODO: Implement this function.
function isPalindrome(str) {

  const normalized = str.toLowerCase();
  if (normalized.length <= 1) return true;
  let left = 0;
  let right = normalized.length - 1;

  while (left < right) {
    if (normalized[left] !== normalized[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
}

/**
 * @param {number[]} numbers An array of numbers.
 * @returns {number[]} A new array containing only the even numbers from the original array.
 */
function filterEvenNumbers(numbers) {
  // TODO: Implement this function.
 function filterEvenNumbers(numbers) {
  if (!Array.isArray(numbers) || numbers.length === 0) return [];

  const evens = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evens.push(numbers[i]);
    }
  }
  return evens;
}
}

// Do not edit the line below.
module.exports = {
  sum,
  reverseString,
  findLargest,
  isPalindrome,
  filterEvenNumbers,
};

