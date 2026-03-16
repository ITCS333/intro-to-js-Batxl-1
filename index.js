/**
 * @param {number} a The first number.
 * @param {number} b The second number.
 * @returns {number} The sum of a and b.
 */
function sum(a, b) {
  // TODO: Implement this function.
function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 0;
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
  if (numbers.length === 0) {
    return null;
  }
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
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
  const lowercaseStr = str.toLowerCase();
  for (let i = 0; i < Math.floor(lowercaseStr.length / 2); i++) {
    if (lowercaseStr[i] !== lowercaseStr[lowercaseStr.length - 1 - i]) {
      return false;
    }
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
  const evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  
  return evenNumbers;
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

