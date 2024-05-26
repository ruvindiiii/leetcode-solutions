/*
Given a pattern and a string s, find if s follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in s.

 

Example 1:

Input: pattern = "abba", s = "dog cat cat dog"
Output: true
*/

var wordPattern = function (pattern, s) {
    let patternMap = {}
    let strArr = s.split(' ')
    let constructStr = []
  
    if (pattern.length !== strArr.length) {
      return false
    }
  
    for (let i = 0; i < pattern.length; i++) {
      patternMap[pattern[i]] = strArr[i]
    }
  
    const patternValues = Object.values(patternMap);
      for (let i = 0; i < patternValues.length; i++) {
        const val = patternValues[i];
          for (let j = i + 1; j < patternValues.length; j++) {
          if (val === patternValues[j]) {
            return false;
        }
      }
    }
  
    for (let i = 0; i < pattern.length; i++) {
      constructStr.push(patternMap[pattern[i]])
    }
  
    for (let i = 0; i < constructStr.length; i++) {
      if (constructStr[i] !== strArr[i]) {
        return false
      }
  
    }
  
    return true
  };