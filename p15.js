function findHobbyists(hobbies, hobby) {
  let result = []
  for(let name in hobbies) {
    if(hobbies[name].includes(hobby)) result.push(name)
  }
  result.sort((a, b) => a.localeCompare(b))
  return result
}

var hobbies = {
  "John": ['Piano', 'Puzzles', 'Yoga'],
  "Adam": ['Drama', 'Fashion', 'Pets'],
  "Mary": ['Magic', 'Pets', 'Reading']
};

console.log(findHobbyists(hobbies, 'Yoga'));
