const { it, expect } = require('@jest/globals')



const a = 16
const b = 4



const CalculatorAdd = require('./Calculator.js')

const CalculatorSubtract = require('./Calculator.js')


const CalculatorMultiply = require('./Calculator.js')


const CalculatorDivide = require('./Calculator.js')


const CalculatorSqRt = require('./Calculator.js')


const CalculatorPower = require('./Calculator.js')



test('Returns number a + number b', () => {
    expect(CalculatorAdd(a + b)).toBe(20)
})


test('Returns number a - number b', () => {
    expect(CalculatorSubtract(a - b)).toBe(12)
})


test('returns number a *  number b', () => {
    expect(CalculatorMultiply(a * b)).toBe(64)
})


test('returns number a divded by number b', () => {
    expect(CalculatorDivide(a / b)).toBe(4)
})


test('returns square root of a', () => {
    expect(CalculatorSqRt(a)).toBe(4)
})


test('returns power of b', () => {
    expect(CalculatorPower(b)).toBe(2)
})

