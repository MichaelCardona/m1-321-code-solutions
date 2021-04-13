/* exported filterOutStrings */
function filterOutStrings(values) {
  var filterStrings = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filterStrings.push(values[i]);
    }
  }
  return filterStrings;
}
