const viewObj = obj => {
  for (let name in obj) {
    console.log('  ' + name);
  }
}

const viewArr = charArr => {
  charArr.forEach(char => console.log(char.name))
}

const sample = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
}

const shuffle = a => {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

module.exports = {
  viewObj,
  viewArr,
  sample,
  shuffle,
}
