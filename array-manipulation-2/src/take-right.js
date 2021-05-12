/* exported takeRight */
function takeRight(array, count) {
  if (array.length === 0) {
    return [];
  }
  var arrayOne = [];
  for (var i = array.length - 1; i >= (array.length) - count; i--) {
    arrayOne.unshift(array[i]);
  }
  return arrayOne;
}
