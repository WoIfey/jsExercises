import readline from 'read-console-input'

const num1 = Number(readline('Skriv in ett tal: '))
const num2 = Number(readline('Skriv in ett tal: '))
const num3 = Number(readline('Skriv in ett tal: '))
const num4 = Number(readline('Skriv in ett tal: '))
const num5 = Number(readline('Skriv in ett tal: '))
let arr = [num1, num2, num3, num4, num5]

const average = arr.reduce((a, b) => a + b, 0) / arr.length

console.log(`Medelvärdet på de angivna talen är: ${average}`)