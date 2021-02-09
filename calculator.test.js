const { it, expect } = require('@jest/globals')


const calculator = require('./Calculator.js')


const a = 16
const b = 4



test('Returns number a + number b', () => {
    expect(calculator.add(a, b)).toBe(20)
})


test('Returns number a - number b', () => {
    expect(calculator.subtract(a, b)).toBe(12)
})


test('returns number a *  number b', () => {
    expect(calculator.multiply(a, b)).toBe(64)
})


test('returns number a divded by number b', () => {
    expect(calculator.divide(a, b)).toBe(4)
})


test('returns square root of a', () => {
    expect(calculator.sqrt(a)).toBe(4)
})


test('returns power of b', () => {
    expect(calculator.pow(a, b)).toBe(65536)
})

