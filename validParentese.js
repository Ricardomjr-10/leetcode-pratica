const isValid = s => {
    const stack = []
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (char === '(' || char === '[' || char === '{') {
            stack.push(char)
        } else {
            const last = stack.pop()
            if (char === ')' && last !== '(' || char === ']' && last !== '[' || char === '}' && last !== '{') {
                return false
            }
        }
    }
    return stack.length === 0   
}

const string = "()[]{}"
console.log(isValid(string))