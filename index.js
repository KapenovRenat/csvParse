const Papa = require('papaparse');

const CSVString = ''; // строка CSV

const parseCSV = (csvString) => {
    let results = Papa.parse(csvString);

    return results;
}

function main() {
    const res = parseCSV(CSVString);

    console.log(res);
}

main();

