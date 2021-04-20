/* exported getKeys */
function getKeys(object) {
  var answer = [];
  for (var key in object) {
    answer.push(key);
  }
  return answer;
}
