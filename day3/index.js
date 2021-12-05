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

function calculateLifeSupportRating(log) {
    const bitCollection = [];

    // Disect all of the bits from the lines
    for (line of log) {
        let [...bits] = line;
        bitCollection.push(bits.map(Number));
    }

    // Do a loop only twice so we can calculate the oxygen and co2 bits
    let oxygen, co2;
    for (let i = 0; i < 2; i++) {
        let results = bitCollection;
        let counter = 0;
        do {
            /**
             * So basically, its not working yet :)
             */

            // If i === 0, we're working out the oxygen generator rating
            // If i === 1, we're working out the CO2 scrubber rating
            const bits = results.filter((b) => b[counter] == !i).length;
            results = results.filter((b) => b[counter] == bits >= results.length - bits);
            counter++;
        } while (results.length !== 1);

        // Write the results
        if (i === 0) { oxygen = results[0]; }
        else { co2 = results[0]; }   
    }

    return parseInt(oxygen.join(''), 2) * parseInt(co2.join(''), 2);
}

const answer = calculateLifeSupportRating(data);
console.log('ANSWER: ' + answer);