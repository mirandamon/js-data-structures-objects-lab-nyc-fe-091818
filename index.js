// Write your solution in this file!
let driver = {}

fruit['apple'] // ('green')
fruit.apple // ('green')

// {name: 'Sam'}

function updateDriverWithKeyAndValue(driver, key, value) {
  const driverCopy = {...driver} // spread operator
  driverCopy[key] = value
  return driverCopy
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value
  return driver
}

function deleteFromDriverByKey(driver, key) {
  const driverCopy = {...driver}
  delete driverCopy[key]
  return driverCopy
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key]
  return driver
}