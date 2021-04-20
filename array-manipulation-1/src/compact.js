/* exported compact */
function compact(array) {
  var compArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Boolean(array[i]) === true) {
      compArray.push(array[i]);
    }
  }
  return compArray;
}
