/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
*/

var majorityElement = function (nums) {
  let numsObs = {};
  for (let i = 0; i < nums.length; i++) {
    if (!numsObs[nums[i]]) {
      numsObs[nums[i]] = 1;
    } else {
      numsObs[nums[i]] += 1;
      if (numsObs[nums[i]] > nums.length / 2) {
        return nums[i];
      }
    }
  }
  return nums[0];
};
