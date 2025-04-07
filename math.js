const a = 1.0
const b = Number('6.5')

console.log(a, b)
console.log(Number.isInteger(a))
console.log(Number.isInteger(b))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * a + avaliacao2 * b
const media = total / (a + b)

console.log(media.toFixed(2))
console.log(media.toString(2)) // em binario
console.log(typeof media)
console.log(typeof Number)