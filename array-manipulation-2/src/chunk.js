/* exported chunk */
function chunk(array, size) {
  if (array.length === 0) {
    return [];
  }
  var arr = [];
  for (var i = 0; i < array.length; i += size) {
    var smallArray = array.slice(i, i + size);
    arr.push(smallArray);
  }
  return arr;
}
