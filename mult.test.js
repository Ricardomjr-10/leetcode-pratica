//const multi = require('./mult.js')

function multi (a, b) {
    return a * b
}

test('multiplies 2 * 2 to equal 4', () => {
    expect (multi(2, 2)).toBe(4)
})