function sortByPriceAscending(jsonString) {
  // Your code goes here
  const jsonArr = JSON.parse(jsonString)
  jsonArr.sort((a,b) => a.price !== b.price ? a.price - b.price : a.name.localeCompare(b.name))
  return JSON.stringify(jsonArr)

}

console.log(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));
