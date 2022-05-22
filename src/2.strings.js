//reverseString: you should be able to reverse a string
// Example: "abc" => "cba"
function reverseString(str) {
  /**
   * can be achieved by combining: 
   *    1. string.prototype.split
   *    2. array.prototype.reverse
   *    3. array.prototype.join
   * 
   * Can even be done on one line
   */
  var Stringsplit = str.split("");
  var reverseArray = Stringsplit.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  str.value = str.value.toLocaleUpperCase();
  return ;
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  var splitString = str.split("");
  return ;
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};