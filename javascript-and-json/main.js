var books = [
  {
    isbn: 2342452,
    title: 'Lord of The Rings',
    author: 'JRR Tolkien'
  },
  {
    isbn: 3523242,
    title: 'This is not a T-Shirt',
    author: 'Bobby Hundreds'
  },
  {
    isbn: 4323532,
    title: 'You Dont Know JS',
    author: 'Kyle Simpson'
  }
];

console.log('books array:', books);
console.log('typeof books:', typeof books);

var booksString = JSON.stringify(books);

console.log('books string:', booksString);
console.log('typeof booksString:', typeof booksString);

var student = '{"id":42345, "name":"Michael"}';

console.log('student:', student);
console.log('typeof student:', typeof student);

var studentObject = JSON.parse(student);

console.log('student object:', studentObject);
console.log('typeof studentObject:', typeof studentObject);
