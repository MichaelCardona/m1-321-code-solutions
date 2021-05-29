/* exported ransomCase */
function ransomCase(string) {
  for (var i = 0, ransomWord = ''; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomWord += string[i].toLowerCase();
    } else if (i % 2 === 1) {
      ransomWord += string[i].toUpperCase();
    }
  }
  return ransomWord;
}
