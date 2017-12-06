const viewChars = (charArr) => {
  charArr.forEach(char => console.log('  ' + char.name));
}

module.exports = {
  viewChars,
}
