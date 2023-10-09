import readline from 'read-console-input'

console.log("=== Guess the number game ===")
let num = Number(readline('Gissa ett tal mellan 0 och 100: '))
const randomNum = Math.floor(Math.random() * 100 + 1)
let tries = 1

while (num !== randomNum) {
    if (num > randomNum) {
        console.log(`Det hemliga talet är mindre än ${num}`)
    } else {
        console.log(`Det hemliga talet är större än ${num}`)
    }
    num = Number(readline('Gissa ett tal mellan 0 och 100: '))
    tries++
}

console.log(`Du gissade rätt på ${tries} försök!`)