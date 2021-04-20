/* exported reverse */
function reverse(array) {
  var revArray = [];
  for (var i = array.length - 1; i >= 0; i--) {
    revArray.push(array[i]);
  }
  return revArray;
}
