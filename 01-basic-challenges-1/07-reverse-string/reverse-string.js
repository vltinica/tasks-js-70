function reverseString(str) {
  let strReverse = "";
  strReverse = str.split("").reverse().join("");

  // for (let i = str.length - 1; i >= 0; i--) {
  //   strReverse += str[i];
  // }
  return strReverse;
}

module.exports = reverseString;
