/* exported drop */
function drop(array, count) {
  if (array.length === 0) {
    return [];
  }
  var arrayOne = [];
  for (var i = count; i < array.length; i++) {
    arrayOne.push(array[i]);
  }
  return arrayOne;
}
