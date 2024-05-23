/*
Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
*/

var canConstruct = function (ransomNote, magazine) {
  const ransomHashMap = {};
  for (let i = 0; i < ransomNote.length; i++) {
    const currentLetter = ransomNote[i];
    if (ransomHashMap[currentLetter]) {
      ransomHashMap[currentLetter] += 1;
    } else {
      ransomHashMap[currentLetter] = 1;
    }
  }

  const magazineHashMap = {};
  for (let i = 0; i < magazine.length; i++) {
    const currentLetter = magazine[i];
    if (magazineHashMap[currentLetter]) {
      magazineHashMap[currentLetter] += 1;
    } else {
      magazineHashMap[currentLetter] = 1;
    }
  }

  const keys = Object.keys(ransomHashMap);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (!magazineHashMap[key] || magazineHashMap[key] < ransomHashMap[key])
      return false;
  }

  return true;
};
