/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let posArr = []
    let negArr = []

    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] < 0) {
            negArr.push(nums[i])
        } else {
            posArr.push(nums[i])
        }
    }
    for (let i = 0; i <= negArr.length - 1; i++) {
        if (negArr.length > 0) {
            negArr[i] = negArr[i] * negArr[i];
        }
    }
    negArr.reverse()
    for (let i = 0; i <= posArr.length - 1; i++) {
        if (posArr.length > 0) {
            posArr[i] = posArr[i] * posArr[i]
        }
    }
    console.log(negArr, posArr)

    let i = 0;
    let j = 0;
    let id = 0;
    let m = negArr.length;
    let n = posArr.length;
    let resArr = []

    while (i < m && j < n) {
        if (negArr[i] <= posArr[j]) {
            nums[id] = negArr[i]
            id++
            i++
        }else{
            nums[id] = posArr[j]
            id++
            j++
        }
    }
    while (i < m) {
        nums[id] = negArr[i]
        id++
        i++
    }
    while (j < n) {
        nums[id] = posArr[j]
        id++
        j++
    }
    return nums
};