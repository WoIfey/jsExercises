import readline from 'read-console-input'

let word = String(readline('Ange ett ord: '))
let characters = /[^A-Za-z0-9]/g;

function palindrome(str) {
    str = str.toLowerCase().replace(characters, '')
    let length = str.length
    for (let i = 0; i < length / 2; i++) {
        if (str[i] !== str[length - 1 - i]) {
            return false
        }
    }
    return true
}

let Palindrome = palindrome(word)

if (Palindrome == true) {
    console.log(`Det angivna ordet är en palindrom.`)
} else {
    console.log(`Det angivna ordet är INTE en palindrom.`)
}