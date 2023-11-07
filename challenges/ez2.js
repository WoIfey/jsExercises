import readline from 'read-console-input'

let num1 = Number(readline('Ange tal 1: '))
let num2 = Number(readline('Ange tal 2: '))
let num3 = Number(readline('Ange tal 3: '))
let biggest

if (num1 >= num2 && num1 >= num3) {
    biggest = num1
} else if (num2 >= num1 && num2 >= num3) {
    biggest = num2
} else {
    biggest = num3
}

console.log(`Det största numret är ${biggest}`)