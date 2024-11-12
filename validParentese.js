const isValid = s => {
    const stack = []
    const opened = (char) =>char === '(' || char === '[' || char === '{'
    const closed = (char, last) => char === ')' && last !== '(' || char === ']' && last !== '[' || char === '}' && last !== '{'
    for (let i = 0; i < s.length; i++) {
        const char = s[i]
        if (opened(char)) {
            stack.push(char)
        } else {
            const last = stack.pop()
            if (closed(char, last)) {
                return false
            }
        }
    }
    return stack.length === 0   
}

const string = "()[]{}"
console.log(isValid(string))