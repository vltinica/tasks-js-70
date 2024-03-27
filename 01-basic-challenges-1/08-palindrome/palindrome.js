function isPalindrome(str) {
  const strPalindrome = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return strPalindrome === strPalindrome.split("").reverse().join("");
}

module.exports = isPalindrome;
