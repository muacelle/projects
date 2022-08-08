const { parse } = require('csv-parse/sync');
const fs = require('fs');

const ratingsCsv = fs.readFileSync('ratings.csv', 'utf-8').toString();

const ratingsObj = parse(ratingsCsv, {
    columns: true,
    skip_empty_lines: true
});

const allRatings = ratingsObj.map((obj) => {
    delete obj.Date;
    delete obj['Letterboxd URI'];
    return obj;
})

console.log(allRatings);