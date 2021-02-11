

function stringRev(str) {
        return str.split('').reverse().join('')
        return 'looC is MGD'
    };
    
    module.exports.stringRev = stringRev;




function stringUpper(upper) {
        return upper.toUpperCase()
      
    }
    
    module.exports.stringUpper = stringUpper
    
    

function stringVowels(removeVowels) {
    var regex = /[aeiou]/g
    for (var i = 0; i < removeVowels.length; i++) {
    return removeVowels.replace(regex, "")
    }
}

module.exports.stringVowels = stringVowels

