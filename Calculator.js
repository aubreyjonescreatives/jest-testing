

const add = (a, b) => {
    return a + b
}


const subtract = (a, b) => {
    return a - b
}


const multiply = (a, b) => {
    return a * b
}


const divide = (a, b) => {
    return a / b
}


const hypotenuse = (a, b) => {
    return (Math.sqrt((a * a) + (b * b)))
}


const power = (a, b) => {
    return (Math.pow(a, b))
}




module.exports = {
    add, 
    subtract, 
    multiply, 
    divide, 
    hypotenuse, 
    power
}