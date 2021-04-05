//const { it, expect } = require("@jest/core")

const { add, subtract, multiply, divide, hypotenuse, power } = require('./Calculator')


const a = 13 
const b = 5

describe('valid additions', () => {
    test('Add numbers using the add method', () => {
        expect(add(a, b)).toEqual(18)
    } )
})


describe('valid subtractions', () => {
    test('Subtract numbers using the subtract method', () => {
        expect(subtract(a, b)).toEqual(8)
    } )
})


describe('valid multiplications', () => {
    test('Multiply numbers using the multiply method', () => {
        expect(multiply(a, b)).toEqual(65)
    } )
})



describe('valid divisions', () => {
    test('Divide numbers using the division method', () => {
        expect(divide(a, b)).toEqual(2.6)
    } )
})


describe('validate the hypotenuse', () => {
    test('Find the hypotenuse for a and b', () => {
        expect(hypotenuse(a, b)).toEqual(13.92838827718412)
    } )
})




describe('validate the power', () => {
    test('Find the power of a and b', () => {
        expect(power(a, b)).toEqual(371293)
    } )
})
