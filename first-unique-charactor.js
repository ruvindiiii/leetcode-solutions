/*
Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
*/

var firstUniqChar = function (s) {
  let numberOfchar = {};
  for (let i = 0; i < s.length; i++) {
    if (!numberOfchar[s[i]]) {
      numberOfchar[s[i]] = 1;
    } else {
      numberOfchar[s[i]] += 1;
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (numberOfchar[s[i]] === 1) {
      return i;
    }
  }

  return -1;
};
