import readline from 'read-console-input'

let text = String(readline('Skriv in en text: '))
const letters = (text.match(/[a-zA-Z ]/g) || []).length
const numbers = (text.match(/[0-9]/g) || []).length

console.log(`\nDen angivna texten innehåller:`)
console.log(`Bokstäver: ${letters}`)
console.log(`Siffror: ${numbers}`)