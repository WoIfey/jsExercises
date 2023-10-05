import readline from 'read-console-input'
let array = [3, 1, 7, 4, 9]

console.log("=== Array index value swapper ===")
console.log("Start värde:", array, "\n")

const num1 = Number(readline('Skriv in första index: '))
const num2 = Number(readline('Skriv in andra index: '))

if (num1 >= 0 && num1 < array.length && num2 >= 0 && num2 < array.length) {
    [array[num1], array[num2]] = [array[num2], array[num1]]
}

console.log(`\nSlut värde efter att ha bytt plats på index ${num1} och ${num2}:`, array)
