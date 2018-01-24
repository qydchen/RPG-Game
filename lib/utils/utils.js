export const viewObj = obj => {
  for (let id in obj) {
    console.log('  ' + obj[id].name);
  }
}

export const viewArr = charArr => {
  charArr.forEach(char => console.log(char.name))
}

export const sample = arr => {
  return arr[Math.floor(Math.random() * arr.length)];
}

export const shuffle = a => {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const getAverage = arr => {
  return Math.ceil(arr.reduce((a, b) => a + b.stats.level, 0)/arr.length)
}

export const getCtx = () => {
  return document.getElementById("game").getContext("2d");
}
