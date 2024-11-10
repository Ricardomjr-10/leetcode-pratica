const isPalindrome = x => {
    const reverseString = x.toString().split('').reverse().join('')
    const convertNumber = parseInt(reverseString)
    if (convertNumber === x) {
        return true
    } else {
        return false
    }
}

const number = 10

console.log(isPalindrome(number))