const name = 'Sarah'
const concatenation = 'Hey ' + name + '!'
const template = `
    Hey
    ${name}!
`
console.log(concatenation, template)

//expressions...
console.log(`1+1= ${1+1}`)

const up = text => text.toUpperCase()
console.log(`HEY...  ${up('warning')}!`)