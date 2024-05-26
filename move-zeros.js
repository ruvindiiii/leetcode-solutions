/*
Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

 

Example 1:

Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
*/

var moveZeroes = function (nums) {
    let zeroArr = []
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        let removedZero = nums.splice(i, 1)
        zeroArr.push(removedZero[0])
        i--
      }
    }
  
    nums.push(...zeroArr)
    return nums
  
  };