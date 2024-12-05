import { input } from './input.js';

const arrayOfData = input.split(/\s{3}|\n/g)

const list1 = [];
const list2 = [];
arrayOfData.forEach((e, i) => {
  i % 2 === 0 ? list1.push(e) : list2.push(e);
});
console.log(list1[0], list2[0]);
