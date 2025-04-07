const a = 1.0
const b = Number('6.5')

console.log(a, b)
console.log(Number.isInteger(a))
console.log(Number.isInteger(b))

const test1 = 9.871
const test2 = 6.871

const total = test1 * a + test2 * b
const mean = total / (a + b)

console.log(mean.toFixed(2))
console.log(mean.toString(2)) // em binario
console.log(typeof mean)
console.log(typeof Number)

const radius= 5.6
const area = Math.PI * Math.pow(radius, 2)

console.log(area)
console.log(typeof Math)