var student = {
  firstName: 'Michael',
  lastName: 'Cardona',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Graphic Designer';

console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation:', student.previousOccupation);

var vehicle = {
  make: 'Toyota',
  model: 'Tacoma',
  year: 2018
};

vehicle['color'] = 'Grey';
vehicle['isConvertible'] = false;

console.log('Color:', vehicle.color);
console.log('Is Convertible:', vehicle.isConvertible);

console.log('value of vehicle', vehicle);

var pet = {
  name: 'King',
  type: 'Dog'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
