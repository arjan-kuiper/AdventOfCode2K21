const fs = require('fs');

const readFile = (path, isNumeric = false) => {
    const data = fs.readFileSync(path, 'utf8');
    const lines = Array.from(data.split(/\r?\n/));

    if (isNumeric) {
        lines.forEach((d, idx) => lines[idx] = Number(d));
    }

    return lines;
}

exports.readFile = readFile;