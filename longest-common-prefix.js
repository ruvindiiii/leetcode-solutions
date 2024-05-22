/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

 

Example 1:

Input: strs = ["flower","flow","flight"]
Output: "fl"
*/

var longestCommonPrefix = function (strs) {
  let prefix = "";
  let shortest = 0;

  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length < shortest) {
      shortest = strs[i].length;
    }
  }

  for (let i = 0; i < shortest; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== strs[0][i]) {
        return prefix;
      }
    }
    prefix += strs[0][i];
  }

  return prefix;
};
