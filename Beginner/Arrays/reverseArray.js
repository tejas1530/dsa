 // An array is a type of data structure that stores elements of the same type in a contiguous block of memory. In an array, , of size , each memory location has some unique index,i (where 0<=i<N ), that can be referenced as A[i]  or Ai .

// Reverse an array of integers.

// Example
// a = [1,2,3,4,5]

// Print a. Do not return anything.

// Input Format

// The first line contains an integer, , denoting the number of integers in the array.
// The second line contains  space-separated integers describing the respective values of .

// Constraints

// , where  is the  integer in the array.
// Output Format

// Print the reversed array on a single line. Do not return anything.

// Return
// Sample Input

// 4
// 1 4 3 2
// Sample Output

// 2 3 4 1
// Explanation

// Function Description

// Complete the function reverseArray in the editor below.

// reverseArray has the following parameter(s):

// int A[n]: the array to reverse
// Returns

// int[n]: the reversed array

// method 1
const reverseArray = (arr) => {
  let newArray = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
};

// method 2
const reverseArray2 = (arr) => arr.reverse();

// method 3
const reverseArray3 = (arr) => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.unshift(arr[i]);
  }
  return newArray;
};

// method 4
const reverseArray4 = (arr) => {
  // math.floor to get rid of decimals in the length of the array so we don't get an infinite loop when we iterate through the array and swap the first and last element
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray2([1, 2, 3, 4, 5]));
console.log(reverseArray3([1, 2, 3, 4, 5]));
console.log(reverseArray4([1, 2, 3, 4, 5]));
