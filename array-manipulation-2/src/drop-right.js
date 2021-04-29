/* exported dropRight */
function dropRight(array, count) {
  if (array.length === 0) {
    return [];
  }
  var arrayOne = [];
  for (var i = 0; i < (array.length) - count; i++) {
    arrayOne.push(array[i]);
  }
  return arrayOne;
}
