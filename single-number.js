/*

Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

You must implement a solution with a linear runtime complexity and use only constant extra space.

 

Example 1:

Input: nums = [2,2,1]
Output: 1
*/

var singleNumber = function (nums) {
  let sortedNums = nums.sort();
  for (let i = 1; i < sortedNums.length; i += 2) {
    if (sortedNums[i - 1] !== sortedNums[i]) {
      return sortedNums[i - 1];
    }
  }
  return sortedNums[sortedNums.length - 1];
};
