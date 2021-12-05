const helpers = require('../_helpers.js')
const data = helpers.readFile('./day3/input.txt');

// Solve
function calculatePowerConsumption(log) {
    const commonBits = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    // Just sum all of the bits together so we can later determine the most common bit
    for (line of log) {
        let [...bits] = line;
        bits = bits.map(Number);
        
        for (let i = 0; i < commonBits.length; i++) {
            commonBits[i] += bits[i]
        }
    }

    // Determine the most common bit by checking if the '1' is more common than length / 2.
    // If it is, we know that '1' is the most common bit, otherwise it's '0'
    const margin = log.length / 2;
    const gamma = commonBits.map((b) => { return b < margin ? 0 : 1 }).join('');
    const epsilon = commonBits.map((b) => { return b > margin ? 0 : 1 }).join('');

    return parseInt(gamma, 2) * parseInt(epsilon, 2);
}

const answer = calculatePowerConsumption(data);
console.log(answer);