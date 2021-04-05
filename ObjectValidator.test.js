const { it, expect } = require('@jest/globals')


const { ObjectValidator } = require('./ObjectValidator')

const string1 = 'coding is cool'
const object1 = string1


describe('Validate that the string is an object key', () => {
    test('Validate that the string is an object key', () => {
        expect(ObjectValidator(object1, string1)).toBe('coding is cool')
    } )
})