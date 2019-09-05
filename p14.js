function johnMary(str) {
  // Your code goes here
  const jCount = (str.match(/John/g) || []).length
  const mCount = (str.match(/Mary/g) || []).length
  return jCount === mCount
}

let name = 'John&Mary'
for (let i = 0; i < 0; i++) {
  name += name
}

console.log(johnMary(name));
