/*
Given a string s which consists of lowercase or uppercase letters, return the length of the longest palindrome that can be built with those letters.

Letters are case sensitive, for example, "Aa" is not considered a palindrome here.

 

Example 1:

Input: s = "abccccdd"
Output: 7
Explanation: One longest palindrome that can be built is "dccaccd", whose length is 7.
*/

var longestPalindrome = function (s) {
  let charMap = {};

  let palindromeLength = 0;
  let foundOdd = false;
  for (let i = 0; i < s.length; i++) {
    if (!charMap[s[i]]) {
      charMap[s[i]] = 1;
    } else {
      charMap[s[i]] += 1;
    }
  }

  let numberOfchar = Object.values(charMap);

  for (let i = 0; i < numberOfchar.length; i++) {
    if (numberOfchar[i] % 2 !== 0) {
      foundOdd = true;
      palindromeLength += numberOfchar[i] - 1;
    } else {
      palindromeLength += numberOfchar[i];
    }
  }
  console.log(palindromeLength);
  return foundOdd ? palindromeLength + 1 : palindromeLength;
};
