// PART ONE //

const input = require('./input');
const arrayOfData = input.split(/\s{3}|\n/g)

const leftList = [];
const rightList = [];

arrayOfData.forEach((e, i) => {
  i % 2 === 0 ? leftList.push(e) : rightList.push(e);
});
leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

let delta = 0;

leftList.forEach((e, i) => {
  delta += Math.abs(e - rightList[i]);
});

// PART TWO //

const buildFrequencyMap = (arr) => {
  const fMap = new Map();
  arr.forEach(e => {
    // if (fMap.has(e))
    fMap.set(e, (fMap.get(e) || 0) + 1);
  })
  return fMap;
}

const calcSimilarityScore = (key, leftMap, rightMap) => {
  if (rightMap.has(key)) {
    return (parseInt(key) * leftMap.get(key) * rightMap.get(key));
  }
  return 0
};

const leftMap = buildFrequencyMap(leftList);
const rightMap = buildFrequencyMap(rightList);
let total = 0;
// console.log(leftMap.entries().toArray());

leftList.forEach(key => {
  total += calcSimilarityScore(key, leftMap, rightMap);
});

console.log(total);