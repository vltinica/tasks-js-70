function titleCase(str) {
  const strArr = str.toLowerCase().split(" ");

  // for (let i = 0; i < strArr.length; i++) {
  //   strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  // }
  // const result = strArr.join(" ");

  // return result;

  const firstCharCapit = strArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const res = firstCharCapit.join(" ");
  return res;
}

module.exports = titleCase;
