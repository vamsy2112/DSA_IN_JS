/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    // Brute force:
    let i = 0;
    while (i <= nums.length - 1) {
        nums[i] = nums[i] * nums[i]
        i++
    }
    return nums.sort((a, b) => a - b)

    // Optimal approach:

};