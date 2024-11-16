const divide = (a, b) => {
    let sinal = 1
    if (a < 0) {
        sinal = -sinal
        a = -a
    }
    if (b < 0) {
        sinal = -sinal
        b = -b
    }

    let result = 0
    while (a >= b) {
        a = a - b
        result++
    }
    result = result * sinal

    return result
}

const a = 7
const b = -3

console.log(divide(a, b))

