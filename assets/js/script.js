// 1. Reverse a String
// Problem: Write a function that takes a string as an argument and returns the string reversed.
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// Example:
// Input: "javascript"
// Output: "tpircsavaj"




















// 2. Palindrome Check
// Problem: Write a function that checks if a given string is a palindrome (reads the same forwards and backward). It should return true if it is a palindrome and false if it is not.
function isPalindrome(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return str === reversed;
}
// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false




















// 3. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers and returns the largest number in it.
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// Example:
// Input: [1, 5, 3, 9, 2]
// Output: 9




















// 4. Factorial Calculation
// Problem: Write a function that calculates the factorial of a given number. (The factorial of 5 is 5 * 4 * 3 * 2 * 1).
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
// Example:
// Input: 5
// Output: 120




















// 5. Prime Number Check
// Problem: Write a function that takes an integer num and checks if it is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. The function should return true if the number is prime and false otherwise.
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
// Example:
// Input: 7
// Output: true
// Input: 10
// Output: false (because it's divisible by 2 and 5)




















// 6. Remove Duplicates from an Array
// Problem: Write a function that takes an array and returns a new array containing only the unique elements (no duplicates).
function removeDuplicates(arr) {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]




















// 7. Find the Missing Number in a Sequence
// Problem: You are given an array containing 99 unique numbers whose values range from 1 to 100. Write a function to find the missing number.
function findMissingNumber(arr) {
    let totalSum = 100 * 101 / 2;
    let arrSum = 0;
    for (let i = 0; i < arr.length; i++) {
        arrSum += arr[i];
    }
    return totalSum - arrSum;
}
// Example:
// Input: An array containing all numbers from 1 to 100 except for the number 55.
// Output: 55




















// 8. Capitalize the First Letter of Each Word
// Problem: Write a function that takes a sentence and returns a new sentence with the first letter of each word capitalized.
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        let word = words[i];
        if (word.length > 0) {
            words[i] = word[0].toUpperCase() + word.slice(1);
        }
    }
    return words.join(" ");
}

// Example:
// Input: "hello world from javascript"
// Output: "Hello World From Javascript"




















// 9. Anagram Check
// Problem: Write a function to check if two strings are anagrams of each other (contain the same characters with the same frequency).
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let sorted1 = str1.split("").sort().join("");
    let sorted2 = str2.split("").sort().join("");
    return sorted1 === sorted2;
}
// Example:
// Input: "listen", "silent"
// Output: true
// Input: "hello", "world"
// Output: false




















// 10. Chunk an Array
// Problem: Write a function that takes an array and a size number, and splits the array into subarrays of the specified size.
function chunkArray(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = [];
        for (let j = i; j < i + size && j < arr.length; j++) {
            chunk.push(arr[j]);
        }
        result.push(chunk);
    }
    return result;
}
// Example:
// Input: [1, 2, 3, 4, 5, 6, 7], 3
// Output: [[1, 2, 3], [4, 5, 6], [7]]




















// 11. Find a Pair of Numbers that Sum to a Target Value
// Problem: Write a function that takes an array of numbers and a target number, and returns the first pair of numbers from the array that sum up to the target.

// Example:
// Input: [10, 5, 2, 7, 8, 3], 10
// Output: [2, 8]




















// 12. Rotate an Array to the Left
// Problem: Write a function that takes an array and a number n, and rotates the array elements to the left by n positions.

// Example:
// Input: [1, 2, 3, 4, 5], 2
// Output: [3, 4, 5, 1, 2]




















// 13. Find the Intersection of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing only the elements that are common to both arrays (the intersection).

// Example:
// Input: [1, 2, 3, 4], [3, 4, 5, 6]
// Output: [3, 4]




















// 14. Count Character Frequency in a String
// Problem: Write a function that takes a string and returns an object representing a frequency map, where each key is a character and its value is the number of times it appears.

// Example:
// Input: "hello"
// Output: { h: 1, e: 1, l: 2, o: 1 }




















// 15. Flatten a Nested Array
// Problem: Write a function that flattens a nested array (an array containing elements that may themselves be arrays) into a single, flat array.

// Example:
// Input: [1, [2, 3], [4, [5, 6]]]
// Output: [1, 2, 3, 4, 5, 6]




















// 16. Find the Longest Word in a Sentence
// Problem: Write a function that takes a sentence and returns the longest word in it. If there are multiple words with the same maximum length, return the first one that appears.

// Example:
// Input: "The quick brown fox jumped over the lazy dog"
// Output: "jumped"




















// 17. Find the Most Frequent Element in an Array
// Problem: Write a function that takes an array of numbers or strings and returns the most frequently occurring element.

// Example:
// Input: [1, 2, 3, 2, 2, 4, 5, 2]
// Output: 2
// Input: ['a', 'b', 'c', 'a', 'b', 'a']
// Output: 'a'




















// 18. Sort an Array of Objects by a Property
// Problem: You have an array of objects, where each object represents a person with a name and age. Write a function to sort the array by age in ascending order (from youngest to oldest) without using Array.prototype.sort.

// Example:
// Input: [{ name: "Alice", age: 30 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 35 }]
// Output: [{ name: "Bob", age: 25 }, { name: "Alice", age: 30 }, { name: "Charlie", age: 35 }]
// Solution: (Using Bubble Sort algorithm)




















// 19. Find the First Non-Repeating Character
// Problem: Write a function that takes a string and finds the first character that does not repeat.

// Example:
// Input: "swiss"
// Output: "w"
// Input: "aabbcc"
// Output: null (or a suitable message)



















// 20. Symmetric Difference of Two Arrays
// Problem: Write a function that takes two arrays and returns a new array containing the elements that are present in one of the arrays, but not in both.

// Example:
// Input: [1, 2, 3], [3, 4, 5]
// Output: [1, 2, 4, 5]

