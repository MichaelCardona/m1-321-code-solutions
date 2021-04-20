/* exported getValues */
function getValues(object) {
  var answer = [];
  for (var key in object) {
    answer.push(object[key]);
  }
  return answer;
}
