let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)
console.log(!isActive)
console.log(!false)
console.log(!true)

console.log('os verdadeiros...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!{})
console.log(!![])
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log('os falsos...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('pra finalizar...')
console.log(!!('' || null || 0 || ' '))

let name = ''
console.log(name || 'Unknown')

name = 'Lucas'
console.log(name || 'Unknown')
