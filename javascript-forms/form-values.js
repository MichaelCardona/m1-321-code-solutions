var input = document.querySelector('#contact-form');

function logSubmit(event) {
  event.preventDefault();
  var name = input.elements.name.value;
  var email = input.elements.email.value;
  var message = input.elements.message.value;
  var messageData = { name, email, message };
  console.log('messageData:', messageData);
  input.reset();
}

input.addEventListener('submit', logSubmit);
