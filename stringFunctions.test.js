
const { it, expect } = require('@jest/globals')

const stringRev = require('./stringFunctions.js')
const stringUpper = require('./stringFunctions.js')
const stringVowels = require('./stringFunctions.js')

it('should reverse a string', () => {
    expect(stringRev.stringRev('DGM is Cool')).toBe('looC si MGD')
});


it('should uppercase a string', () => {
    expect(stringUpper.stringUpper('all of these words')).toBe('ALL OF THESE WORDS')
});


it('should remove all vowels from a string', () => {
    expect(stringVowels.stringVowels('Hello World')).toBe('Hll Wrld')
});
