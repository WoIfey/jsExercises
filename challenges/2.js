import readline from 'read-console-input'

console.log("=== Räkna ut fakultet ===")
const num = Number(readline('Skriv in ett tal: '))

let value = num
for (let i = value - 1; i > 1; i--) {
    value = value * i
}

console.log(`Fakulteten (n!) av talet ${num} är:`, value)