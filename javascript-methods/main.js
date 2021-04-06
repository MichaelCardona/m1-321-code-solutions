var first = 30;
var second = 60;
var third = 90;

var maximumValue = Math.max(first, second, third);

console.log('maximumValue:', maximumValue);

var heroes = ['Wolverine', 'SpiderMan', 'Colossus', ' hulk'];

var randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

var randomIndex = Math.floor(randomNumber);

console.log('random index:', randomIndex);

var randomHero = heroes[randomIndex];

console.log('randomHero:', randomHero);

var library = [
  {
    title: 'Lord of the Rings',
    author: 'J.R.R Tolkien'
  },
  {
    title: 'The outsiders',
    author: 'S.E. Hilton'
  },
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling'
  }
];

var lastBook = library.pop();

console.log('Last Book:', lastBook);

var firstBook = library.shift();

console.log('First Book:', firstBook);

var js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('library', library);

var fullName = 'Michael Cardona';

var firstAndLastName = fullName.split(' ');

console.log('First And Last Name', firstAndLastName);

var firstName = firstAndLastName[0];

var sayMyName = firstName.toUpperCase();

console.log('Say My Name', sayMyName);
