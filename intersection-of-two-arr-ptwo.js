/*
Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
*/

var intersect = function (nums1, nums2) {
  let commonNumbers = [];
  for (let i = 0; i < nums1.length; i++) {
    //i = 1
    for (let j = 0; j < nums2.length; j++) {
      // j = 0
      if (nums1[i] === nums2[j]) {
        commonNumbers.push(nums1[i]);
        nums2.splice(j, 1);
        break;
      }
    }
  }
  return commonNumbers;
};
