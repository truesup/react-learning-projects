const numbers = [5, 12, 3]

const reducer = (accumulator, currentValue) => accumulator + currentValue

const total = numbers.reduce(reducer, 0)
console.log(total)
