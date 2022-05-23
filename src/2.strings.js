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
 reverse =  str.split("").reverse().join("");
return reverse;
}

//capitalize: should return the input in all-caps
// Example: "this is a string" => "THIS IS A STRING"
function capitalize(str) {
  const strToArr = str.split('');
  const UpArr = strToArr.map(word => word[0].toUpperCase()+ word.substring(1));
  DownArr = UpArr.join("");
  return DownArr ;
}

// splitString: should divide a string into substrings and return an array
// Example: "Jane,Doe,21"  =>  [ "Jane", "Doe", "21" ]
function splitString(str, splitAt = `,`) {
  const arrr = str.split(',');
  return arrr;
}
module.exports = {
  reverseString,
  capitalize,
  splitString
};