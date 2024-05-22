/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "anagram", t = "nagaram"
Output: true
*/

var isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  let argOneMap = {};
  let argTwoMap = {};
  for (let i = 0; i < s.length; i++) {
    if (argOneMap[s[i]]) {
      argOneMap[s[i]] += 1;
    } else {
      argOneMap[s[i]] = 1;
    }

    if (argTwoMap[t[i]]) {
      argTwoMap[t[i]] += 1;
    } else {
      argTwoMap[t[i]] = 1;
    }
  }

  let keys = Object.keys(argOneMap);
  for (let i = 0; i < keys.length; i++) {
    if (argOneMap[keys[i]] !== argTwoMap[keys[i]]) {
      return false;
    }
  }

  return true;
};
