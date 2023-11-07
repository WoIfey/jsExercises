import readline from 'read-console-input'

let num = Number(readline('Ange ett tal: '))
let primeNum = true

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        primeNum = false
    }
}

if (primeNum) {
    console.log(`Det angivna talet är ett Primtal.`)
} else {
    console.log(`Det angivna talet är INTE ett Primtal.`)
}