/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with O(log n) runtime complexity.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
*/

var searchInsert = function(nums, target) {
    let start = 0;
       let end = nums.length - 1;
   
       while (start < end) {
        const mid = Math.floor((start + end) / 2)
      
      if (nums[mid] === target) {
          return mid;
      }
      
      if (nums[mid] > target) {
          end = mid;
      } else {
          start = mid + 1;
      }
    }
    
    if (target > nums[nums.length - 1]) {
        return nums.length;
    } else {
        return start;
    }
  }