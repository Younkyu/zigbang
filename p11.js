const fs = require('fs')
const util = require('util')
const readFile = util.promisify(fs.readFile)

async function f(a, b) {
  const option = { encoding: 'UTF-8'}
  const n = await readFile(a, option)
  const c = await readFile(b, option)

  return [n, c]
}

let result = f('a','b')

console.log(result)
