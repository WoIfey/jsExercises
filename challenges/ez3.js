import readline from 'read-console-input'

let num = Number(readline('Ange tal: '))

if (num % 2 === 0) {
    console.log(`Talet är jämnt`)
} else {
    console.log(`Talet är udda`)
}