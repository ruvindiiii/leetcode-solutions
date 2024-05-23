/*
Given two integer arrays nums1 and nums2, return an array of their 
intersection
. Each element in the result must be unique and you may return the result in any order.

 

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2]
*/

var intersection = function (nums1, nums2) {
  let intersection = {};
  const map = {};

  for (let i = 0; i < nums2.length; i++) {
    map[nums2[i]] = true;
  }

  for (let i = 0; i < nums1.length; i++) {
    if (intersection[nums1[i]]) {
      continue;
    }

    if (map[nums1[i]]) {
      intersection[nums1[i]] = true;
    }
  }

  return Object.keys(intersection);
};
