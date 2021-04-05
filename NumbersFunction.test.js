const { it, expect } = require('@jest/globals')


const { Numbers } = require('./NumbersFunction')


const numArray = [4, 5, 6, 8, 5, 4]
const sum = numArray.reduce(function(x, y) {
    return x + y
}, 0)


describe('Add all numbers of an array', () => {
    test('Add all numbers of an array', () => {
        expect(Numbers(sum)).toBe(32)
    } )
})