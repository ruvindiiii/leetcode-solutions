/*
Given two strings s and t, determine if they are isomorphic.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

Example 1:

Input: s = "egg", t = "add"
Output: true
*/

var isIsomorphic = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charMapLeft = {};
  const charMapRight = {};

  for (let i = 0; i < s.length; i++) {
    const sIth = s[i];
    const tIth = t[i];
    if (charMapLeft[sIth]) {
      if (charMapLeft[sIth] === tIth) {
        continue;
      } else {
        return false;
      }
    } else {
      charMapLeft[sIth] = tIth;
    }

    if (charMapRight[tIth]) {
      if (charMapRight[tIth] === sIth) {
        continue;
      } else {
        return false;
      }
    } else {
      charMapRight[tIth] = sIth;
    }
  }

  return true;
};
