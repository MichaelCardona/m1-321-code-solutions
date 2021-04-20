/* exported toObject */
function toObject(keyValuePair) {
  var answer = {};
  answer[keyValuePair[0]] = keyValuePair[1];
  return answer;
}
