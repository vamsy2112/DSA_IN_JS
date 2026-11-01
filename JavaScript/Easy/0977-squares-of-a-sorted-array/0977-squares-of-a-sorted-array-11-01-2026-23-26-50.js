/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    let posArr = [];
    let negArr = [];

    for (let i = 0; i <= nums.length - 1; i++) {
        if (nums[i] >= 0) {
            posArr.push(nums[i])
        } else {
            negArr.push(nums[i])
        }
    }
    for (let i = 0; i <= posArr.length - 1; i++) {
        if (posArr.length > 0) {
            posArr[i] = posArr[i] * posArr[i]
        }
    }

    for (let i = 0; i <= negArr.length - 1; i++) {
        if (negArr.length > 0) {
            negArr[i] = negArr[i] * negArr[i]
        }
    }
    negArr.reverse()
    // console.log(posArr, negArr)

    let i = 0;
    let j = 0;
    let id = 0;
    let m = posArr.length;
    let n = negArr.length;
    let resArr = [];

    while (i < m && j < n) {
        if (posArr[i] < negArr[j]) {
            resArr.push(posArr[i])
            id++
            i++
        } else {
            resArr.push(negArr[j])
            id++
            j++
        }
    }

    while (i < m) {
        resArr[id] = posArr[i]
        id++
        i++
    }

    while (j < n) {
        resArr[id] = negArr[j]
        id++
        j++
    }
    return resArr
};