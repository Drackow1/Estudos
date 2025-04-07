const values = [7.7, 8.5, 5.7 , 4.8]
console.log(values[0], values[3])
console.log(values[4])

values[4] = 10
console.log(values)
console.log(values.length)

values.push({id:3}, false,null, 'teste')
console.log(values)

console.log(values.pop())
delete  values[0]
console.log(values)

console.log(typeof values)