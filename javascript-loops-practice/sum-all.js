/* exported sumAll */
function sumAll(number) {
  var start = 0;
  for (var i = 0; i < number.length; i++) {
    start += number[i];
  }
  return start;
}
