/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 1;
    let j = 1;
    while (i < nums.length) {
        if (nums[i] == nums[j - 1]) {
            i++;
        } else {
            nums[j] = nums[i];
            j++;
        }
    }
    return j
};