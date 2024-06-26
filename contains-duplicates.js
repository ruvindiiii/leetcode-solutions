/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
*/

var containsDuplicate = function (nums) {
  let myObj = {};
  for (let i = 0; i < nums.length; i++) {
    let ele = nums[i];
    if (myObj[ele] === true) {
      return true;
    } else {
      myObj[ele] = true;
    }
  }
  return false;
};
