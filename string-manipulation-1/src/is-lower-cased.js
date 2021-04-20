/* exported isLowerCased */
function isLowerCased(word) {
  var answer = false;
  if (word === word.toLowerCase()) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
