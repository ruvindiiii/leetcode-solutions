/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
*/

var reverseVowels = function (s) {
  let argArr = s.split("");

  let start = 0;
  let end = s.length - 1;
  let vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  };

  while (start < end) {
    let startChar = argArr[start];
    let endChar = argArr[end];
    let isStartVowel = vowels[startChar.toLowerCase()];
    let isEndVowel = vowels[endChar.toLowerCase()];

    if (isStartVowel && isEndVowel) {
      let startVal = startChar;
      let endVal = endChar;
      argArr[start] = endVal;
      argArr[end] = startVal;

      start++;
      end--;
      continue;
    }

    if (!isStartVowel && !isEndVowel) {
      start++;
      end--;
      continue;
    }

    if (isStartVowel) {
      end--;
    } else {
      start++;
    }
  }

  return argArr.join("");
};
