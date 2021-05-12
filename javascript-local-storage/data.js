/* exported todos */

var todos = [];

var lastTodosjson = localStorage.getItem('javascript-local-storage');

todos = JSON.parse(lastTodosjson);

window.addEventListener('beforeunload', function (event) {
  var todosJSON = JSON.stringify(todos);
  localStorage.setItem('javascript-local-storage', todosJSON);
});
