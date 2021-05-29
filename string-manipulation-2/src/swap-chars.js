/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  var stringArray = string.split('');
  stringArray[firstIndex] = string[secondIndex];
  stringArray[secondIndex] = string[firstIndex];
  for (var i = 0, swappedString = ''; i < stringArray.length; i++) {
    swappedString += stringArray[i];
  }
  return swappedString;
}
