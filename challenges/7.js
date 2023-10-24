import readline from 'read-console-input'

let text = String(readline('Skriv in en text: '))
const consonants = (text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ ]/g) || []).length
const vowels = (text.match(/[aeiouAEIOU ]/g) || []).length

console.log(`\nDen angivna texten innehåller:`)
console.log(`Konsanter: ${consonants}`)
console.log(`Vokaler: ${vowels}`)