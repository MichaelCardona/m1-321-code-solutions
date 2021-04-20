/* exported isVowel */
function isVowel(char) {
  var answer = false;
  var voinword = char.toLowerCase();
  if (voinword === 'a' || voinword === 'e' || voinword === 'i' || voinword === 'o' || voinword === 'u') {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}
