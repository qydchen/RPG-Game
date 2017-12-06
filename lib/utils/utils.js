const viewObj = obj => {
  for (let name in obj) {
    console.log('  ' + name);
  }
}

const viewArr = charArr => {
  charArr.forEach(char => console.log(char.name))
}

module.exports = {
  viewObj,
  viewArr,
}
