/*
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.

 

Example 1:

Input: num = 16
Output: true
Explanation: We return true because 4 * 4 = 16 and 4 is an integer.
*/

var isPerfectSquare = function (num) {
  if (num === 1) return true;
  let i = 2;
  let perfectSquare = 0;

  while (i <= num) {
    perfectSquare = i * i;

    if (perfectSquare === num) {
      return true;
    }
    if (perfectSquare > num) {
      return false;
    }

    i++;
  }
};
