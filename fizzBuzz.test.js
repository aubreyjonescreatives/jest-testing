const { it, expect } = require('@jest/globals')


const fizzBuzz = require('./fizzBuzz.js')





test('Returns fizz for multiples of 3', () => {
    expect(fizzBuzz(6)).toBe('Fizz')
})


test('Returns buzz for multiples of 5', () => {
    expect(fizzBuzz(10)).toBe('Buzz')
})


test('returns fizzBuzz for multiples of 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz')
})

