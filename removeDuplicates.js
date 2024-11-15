const removeDuplicates = nums => {
for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] === nums[j]) {  
            nums.splice(j, 1)
            j-- 
        }
    }
}
return nums.length
}
const nums = [1,1,2]

console.log(removeDuplicates(nums), nums)