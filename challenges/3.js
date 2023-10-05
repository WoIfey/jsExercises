import readline from 'read-console-input'
let n1 = 0, n2 = 1, nextTerm

console.log("=== Fibonacci ===")
const num = Number(readline('Hur många fibonacci tal vill du generera: '))

for (let i = 1; i <= num; i++) {
    console.log(n1)
    nextTerm = n1 + n2
    n1 = n2
    n2 = nextTerm
}
