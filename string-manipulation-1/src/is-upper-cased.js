/* exported isUpperCased */
function isUpperCased(word) {
  var answer = false;
  if (word === word.toUpperCase()) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
