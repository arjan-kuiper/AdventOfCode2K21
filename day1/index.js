const helpers = require('../_helpers.js')
const data = helpers.readFile('./day1/input.txt', true);

// Solve
function countIncreases(numberArray, sweepWindow = 1) {
    let increases = 0;

    for (let i = 0; i < numberArray.length; i++) {
        if (i < sweepWindow) continue;
        const previous = numberArray.slice(i - sweepWindow, i).reduce((a, b) => a + b, 0);
        const current = numberArray.slice(i - sweepWindow + 1, i + 1).reduce((a, b) => a + b, 0);

        if (current > previous) {
            increases++;
        }
    }
    return increases;
}

const answer = countIncreases(data, 3);
console.log(answer);