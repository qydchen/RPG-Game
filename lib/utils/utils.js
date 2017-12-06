const viewObj = obj => {
  for (let id in obj) {
    console.log('  ' + obj[id].name);
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

const getAverage = arr => {
  return Math.ceil(arr.reduce((a, b) => a + b.stats.level, 0)/arr.length)
}

module.exports = {
  viewObj,
  viewArr,
  sample,
  shuffle,
  getAverage,
}
