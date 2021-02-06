
const { it, expect } = require('@jest/globals')

const stringRev = require('./stringFunctions.js')
const stringUpper = require('./stringFunctions.js')

it('should reverse a string', () => {
    expect(stringRev('DGM is Cool')).toBe('looC si MGD')
});


it('should uppercase a string', () => {
    expect(stringUpper('all of these words')).toBe('ALL OF THESE WORDS')
});
