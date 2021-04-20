/* exported filterOutNulls */
function filterOutNulls(values) {
  var filterValues = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterValues.push(values[i]);
    }
  }
  return filterValues;
}
