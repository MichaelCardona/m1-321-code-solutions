var background = document.querySelector('.background');
var light = document.querySelector('.light');

function lightSwitch(event) {
  if (light.className === 'light light-off') {
    light.className = 'light light-on';
    background.className = 'background on';
  } else {
    light.className = 'light light-off';
    background.className = 'background off';
  }
}

light.addEventListener('click', lightSwitch);
