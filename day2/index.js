const helpers = require('../_helpers.js')
const data = helpers.readFile('./day2/input.txt');

// Solve
function determineFinalLocation(commands, withAim = false) {
    const position = { horizontal: 0, vertical: 0, aim: 0 };
    
    for (const command of commands) {
        const [cmd, value] = command.split(/\s+/);
        const amount = Number(value);

        switch (cmd) {
            case 'forward':
                position.horizontal += amount;
                if (withAim) { position.vertical += position.aim * amount; }
                break;
            case 'up':
                if (withAim) { position.aim -= amount; }
                else { position.vertical -= amount; }
                break;
            case 'down':
                if (withAim) { position.aim += amount; }
                else { position.vertical += amount; }
                break;
            default:
                break;
        }
    }

    return position.horizontal * position.vertical;
}

const answer = determineFinalLocation(data, true);
console.log(answer);