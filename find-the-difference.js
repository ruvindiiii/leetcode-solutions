/*
You are given two strings s and t.

String t is generated by random shuffling string s and then add one more letter at a random position.

Return the letter that was added to t.

 

Example 1:

Input: s = "abcd", t = "abcde"
Output: "e"
Explanation: 'e' is the letter that was added.
*/

var findTheDifference = function (s, t) {
  let sMap = {};
  for (let i = 0; i < s.length; i++) {
    if (sMap[s[i]]) {
      sMap[s[i]] += 1;
    } else {
      sMap[s[i]] = 1;
    }
  }

  let tMap = {};
  for (let i = 0; i < t.length; i++) {
    if (tMap[t[i]]) {
      tMap[t[i]] += 1;
    } else {
      tMap[t[i]] = 1;
    }
  }
  let keys = Object.keys(tMap);

  console.log(keys);
  for (let i = 0; i < keys.length; i++) {
    let char = keys[i];
    if (sMap[char] !== tMap[char]) {
      return char;
    }
  }
};
