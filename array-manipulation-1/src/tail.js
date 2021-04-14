/* exported tail */
function tail(array) {
  for (var i = 1, tailArray = []; i < array.length; i++) {
    tailArray[i - 1] = array[i];
  }
  return tailArray;
}
