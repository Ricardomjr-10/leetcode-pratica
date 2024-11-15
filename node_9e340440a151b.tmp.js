const removeDuplicates = nums => {
let array = []
for (let i = 0; i < nums.length; i++) {
    if (!array.includes(nums[i])) {
        array.push(nums[i])
    }
    nums += array
    
}
return array
}

const nums = [1,1,2]

console.log(removeDuplicates(nums), nums)