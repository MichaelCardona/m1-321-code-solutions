function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}
var convertMinutesToSecondsResults = convertMinutesToSeconds(5);
console.log('convertMinutesToSecondsResults:', convertMinutesToSecondsResults);

function greet(name) {
  var hello = 'Hey,' + ' ' + name;
  return hello;
}

var greetResults = greet('Bevis');
console.log('Greet Results: ', greetResults);

function getArea(width, height) {
  var shape = width * height;
  return shape;
}

var getAreaResults = getArea(17, 42);

console.log('getAreaResults:', getAreaResults);

function getFirstName(person) {
  var firstName = person.firstName;

  return firstName;
}

var firstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('firstNameResult:', firstNameResult);

function getLastElement(array) {
  var lastIndex = array.length - 1;
  var lastElement = array[lastIndex];
  return lastElement;
}
var getLastElementResults = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('Last Element:', getLastElementResults);
