const CUSTOMMATH = require(`./arithmeticpackage/operations`).CUSTOMMATH
const SM = require('./arithmeticpackage/operations').SOMETHING

// Add numbers 2 + 5
console.log(CUSTOMMATH.sum(2,5))

// Subtract numbers 5 - 2
console.log(CUSTOMMATH.subtract(5,2))

// Subtract numbers 2 - 5
console.log(CUSTOMMATH.subtract(2,5))

// Multiply numbers [2,2,2]
console.log(CUSTOMMATH.product([2,2,2]))

// Log to the console the title of the second export
console.log(SM.title)


