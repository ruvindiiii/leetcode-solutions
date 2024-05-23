/*
Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.

 

Example 1:

Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.

*/

var addDigits = function (num) {
  let digit = num;

  while (digit >= 10) {
    let numArr = [];
    numArr.push(...digit.toString());
    let newArr = numArr.map((ele) => Number(ele));

    digit = newArr.reduce((total, elem) => {
      return total + elem;
    }, 0);
  }

  return digit;
};
