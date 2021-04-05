const { it, expect } = require('@jest/globals')




const { Reverse, UpperCase, RemoveVowels } = require('./StringFunctions')




describe('This function will reverse a string', () => {
    test('Coding is Cool', () => {
        expect(Reverse('Coding is Cool')).toBe('looC si gnidoC')
    } )
})



describe('This function will uppercase a string', () => {
    test('coding is cool', () => {
        expect(UpperCase('coding is cool')).toBe('CODING IS COOL')
    } )
})



describe('This function will remove vowels from a string', () => {
    test('coding is cool', () => {
        expect(RemoveVowels('coding is cool')).toBe('cdng s cl')
    } )
})
