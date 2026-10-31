/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m-1; // pointer 1 at last place of nums1
    let p2 = n-1; // pointer 2 at last place of nums2
    let i = m+n-1; // pointer which replaces the value as per condition in the resulting array

    for(i; i>=0; i--){
        if(p2<0 || (p1 >=0 && (nums1[p1] >= nums2[p2]))){ // p2 going out of bound means p2<0 and p1 is still available to get values.
            nums1[i] = nums1[p1]
            p1--;
        }else{
            nums1[i] = nums2[p2]
            p2--;
        }
    }
};