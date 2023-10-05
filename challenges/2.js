import readline from 'read-console-input'

console.log("=== Räkna ut fakultet ===")
const num = Number(readline('Skriv in ett tal: '))

function factorialize(num) {
    if (num < 0) {
        return -1
    } else if (num == 0) {
        return 1
    } else {
        return (num * factorialize(num - 1))
    }
}

console.log(`Fakulteten (n!) av talet ${num} är:`, factorialize(num))