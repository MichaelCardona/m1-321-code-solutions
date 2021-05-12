function handleFocus(event) {
  console.log('focus event fired');
  console.log('event.target.name', event.target.name);
}

function handleBlur(event) {
  console.log('blue event fired');
  console.log('event.target.name', event.target.name);
}

function handleInput(event) {
  console.log('event.target.name', event.target.name);
  console.log('event.target.value', event.target.value);
}

var username = document.querySelector('#user-name');
var useremail = document.querySelector('#user-email');
var usermessage = document.querySelector('#user-message');

username.addEventListener('focus', handleFocus);
username.addEventListener('blur', handleBlur);
username.addEventListener('input', handleInput);

useremail.addEventListener('focus', handleFocus);
useremail.addEventListener('blur', handleBlur);
useremail.addEventListener('input', handleInput);

usermessage.addEventListener('focus', handleFocus);
usermessage.addEventListener('blur', handleBlur);
usermessage.addEventListener('input', handleInput);
