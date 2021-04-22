var modal = document.querySelector('.modalButton');
var modalBg = document.querySelector('.modalBg');
var closeModal = document.querySelector('.close');

modal.addEventListener('click', function () {
  modalBg.classList.add('bg-active');
});
closeModal.addEventListener('click', function () {
  modalBg.classList.remove('bg-active');
});
