var cont = document.querySelector('.tab-container');

var tabCont = document.querySelectorAll('.tab');

var viewCont = document.querySelectorAll('.view');

function switchCard(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < tabCont.length; i++) {
      if (event.target === tabCont[i]) {
        event.target.className = 'tab active';
      } else {
        tabCont[i].className = 'tab';
      }
    }
  }
  if (event.target.matches('.tab')) {
    var cardView = event.target.getAttribute('data-view');
    for (var m = 0; m < viewCont.length; m++) {
      if (cardView === viewCont[m].getAttribute('data-view')) {
        viewCont[m].className = 'view';
      } else {
        viewCont[m].className = 'view hidden';
      }
    }
  }
}
cont.addEventListener('click', switchCard);
