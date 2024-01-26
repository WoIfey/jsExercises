import readline from 'read-console-input'

let num = Number(readline('Ange ett tal: '))

let factors = []
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        factors.push(i)
    }
}
console.log(`Faktorer: ` + factors.join(', '))

console.log(`Multiplikationstabell:`)
for (let i = 0; i < factors.length; i++) {
    for (let j = 0; j < factors.length; j++) {
        if (factors[i] * factors[j] === num) {
            console.log(`${factors[i]} * ${factors[j]} = ${num}`)
        }
    }
}
