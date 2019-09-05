function startStopwatch(callback, interval) {
  // Write the code that goes here
  let counter = 1
  let isContinue = true
  timeoutRecursive(callback, interval, isContinue, counter)
}

const timeoutRecursive = (callback, interval, isContinue, counter) => {
  if(isContinue) {
    setTimeout(() => {
      const nextIsContinue = callback(counter)
      const nextCounter = counter + 1
      timeoutRecursive(callback, interval, nextIsContinue, nextCounter)
    }, interval)
  }
}

function callback(counter) {
  console.log(counter);
  return counter < 5;
}

// Expected: 1, 2, 3, 4, 5 with 50ms interval.
startStopwatch(callback, 50);
