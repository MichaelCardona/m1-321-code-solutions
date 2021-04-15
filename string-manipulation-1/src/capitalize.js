/* exported capitalize */
function capitalize(word) {
  var lower = word.slice(1).toLowerCase();
  var upper = word[0].toUpperCase();
  return upper + lower;
}
