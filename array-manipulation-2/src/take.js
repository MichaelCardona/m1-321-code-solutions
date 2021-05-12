/* exported take */
function take(array, count) {
  var arrayOne = [];
  if (array.length > 0) {
    for (var i = 0; i < count; i++) {
      arrayOne.push(array[i]);
    }
  } else if (array.length === 0) {
    arrayOne = [];
  }
  return arrayOne;
}
