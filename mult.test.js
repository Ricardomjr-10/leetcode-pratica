const multi = require('./mult.js')

test('multiplies 2 * 2 to equal 4', () => {
    expect (multi(2, 2)).toBe(4)
})