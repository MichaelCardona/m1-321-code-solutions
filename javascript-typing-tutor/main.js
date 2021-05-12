var letter = document.querySelectorAll('span');
var correction = 0;

function keydown(event) {
  if (event.key === letter[correction].textContent) {
    letter[correction].className = 'green border-green';
    correction++;
    letter[correction].className = 'border';
  } else {
    letter[correction].className = 'red border-red';
  }
}

document.addEventListener('keydown', keydown);
