/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    let resultArr = []

    nums.sort((a,b) => a-b)

    for (let i = 0; i < nums.length; i++) {
        if(i>0 && nums[i] == nums[i-1]){
            continue;
        }
        let j = i + 1;
        let k = nums.length - 1;


        while (j < k) {
            let sum = -1 * nums[i]
            let s = nums[j] + nums[k]

            if (s == sum) {
                resultArr.push([nums[i], nums[j], nums[k]])
                j++

                while (j < k && nums[j] == nums[j - 1]) {
                    j++
                }
            } else if (s < sum) {
                j++
            } else {
                k--
            }
        }
    }
    return resultArr
};