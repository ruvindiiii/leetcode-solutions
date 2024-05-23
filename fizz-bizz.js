/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
*/

var fizzBuzz = function (n) {
  let numArr = [];

  for (let i = 1; i <= n; i++) {
    numArr.push(i.toString());
  }

  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] % 3 === 0 && numArr[i] % 5 === 0) {
      numArr.splice(i, 1, "FizzBuzz");
    }
    if (numArr[i] % 3 === 0) {
      numArr.splice(i, 1, "Fizz");
    }
    if (numArr[i] % 5 === 0) {
      numArr.splice(i, 1, "Buzz");
    }
  }

  return numArr;
};
