




const Reverse = (str) => {
    return str.split('').reverse().join('')
   
}



const UpperCase = (str) => {
    return str.toUpperCase()
    
}



const RemoveVowels = (str) => {
    const vowels = /[aeiou]+/g
    return str.replace(vowels, '')
    
}






module.exports = {
    Reverse,
    UpperCase, 
    RemoveVowels
}
