/* exported capitalizeWords */
function capitalizeWords(string) {
  var stringArray = string.split(' ');
  for (var i = 0, capString = ''; i < stringArray.length; i++) {
    capString += ' ' + stringArray[i].charAt(0).toUpperCase() +
      stringArray[i].slice(1, stringArray[i].length).toLowerCase();
  }
  return capString.trim();
}
