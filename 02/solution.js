// const data = require('./input.js');
const data = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;
const matrix = data.split(/\n/).map(e => {
  return e.split(/\s/);
});

let sum = matrix.reduce((acc, report) => {
  let ascending = parseInt(report[0]) > parseInt(report[1]) ? false : true;
  console.log('acc: ', acc);

  const passesTests = report.every((e, i, arr) => {
    if (parseInt(e) == parseInt(arr[i + 1])) return false;
    if (parseInt(e) > parseInt(arr[i + 1]) && ascending == true) return false;
    if (parseInt(e) < parseInt(arr[i + 1]) && ascending != true) return false;
    if (Math.abs(parseInt(e) - parseInt(arr[i + 1])) > 3) return false;
    return true;
  });
  console.log(passesTests, report);

  // If all tests pass for all levels in report:
  return passesTests ? acc += 1 : acc;
}, 0)

console.log('sum: ', sum);
