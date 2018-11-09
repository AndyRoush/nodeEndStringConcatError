const fs = require('fs');

const csv = fs.readFileSync('./dance_master.csv', 'utf-8');

// function #1
function processRow1(row) {
    const splt = row.split(',');
    let out = "";
    out += '(';
    out += splt[0] + ',';
    out += `'${splt[1]}'` + ',';
    out += `'${splt[2]}'` + ',';
    out += splt[3] + ',';
    out += `'${splt[4]}'` + ',';
    out += `${splt[5]})`;
    out += ')';

    return out;
}
let row1 = csv.split('\n')[1];
console.log(processRow1(row1));


// function #2
function processRow2(row) {
    const splt = row.split(',');

    return `(${splt[0]}, '${splt[1]}', '${splt[2]}', ${splt[3]}, '${splt[4]}', ${splt[5]})`;
}

console.log(processRow2(row1));


// function #3
function processRow3(row) {
    const splt = row.split(',');


    return `${splt[0]}, '${splt[1]}', '${splt[2]}', ${splt[3]}, '${splt[4]}', ${splt[5]}`;
}

console.log("(" + processRow3(row1)+ ")" );


// function #4
function processRow4(row) {
    const splt = row.split(',');

    return `(${splt[0]}, '${splt[1]}', '${splt[2]}', ${splt[3]}, '${splt[4]}', ${splt[5]}1234`;
}

console.log(processRow4(row1));
