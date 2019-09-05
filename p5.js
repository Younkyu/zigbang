function calcAvgHeight(data) {
  // Calculate average height from received data. If no data, return null.
  let result = 0
  let i = 0
  for(let key in data) {
    result += data[key].height
    i++
  }
  if(i === 0) return null
  return result/i
}

var avgHeight = calcAvgHeight({
  Matt: { height: 174, weight: 69 },
  Jason: { height: 190, weight: 103 }
});
console.log(avgHeight);
