const helpers = require('../_helpers.js')
const data = helpers.readFile('./day2/input.txt');

// Solve
function determineFinalLocation(commands) {
    const position = { horizontal: 0, vertical: 0 };
    
    for (const command of commands) {
        const [cmd, value] = command.split(/\s+/);
        const amount = Number(value);

        switch (cmd) {
            case 'forward':
                position.horizontal += amount;
                break;
            case 'up':
                position.vertical -= amount;
                break;
            case 'down':
                position.vertical += amount;
                break;
            default:
                break;
        }
    }

    return position.horizontal * position.vertical;
}

const answer = determineFinalLocation(data);
console.log(answer);