import { parse } from 'csv-parse/sync';
import fs from 'fs'
import fetch from 'node-fetch';

const ratingsCsv = fs.readFileSync('ratings.csv', 'utf-8').toString();

const ratingsObj = parse(ratingsCsv, {
    columns: true,
    skip_empty_lines: true
});

async function getMovieId(nameyear) {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_sfmpwgoj/${nameyear}`);
    const data = await response.json();
    const movieId = data.results[0].id;
    getDirector(movieId);
}

async function getDirector(movieid) {
    const response = await fetch(`https://imdb-api.com/en/API/FullCast/k_sfmpwgoj/${movieid}`);
    const data = await response.json();
    const director = data.directors.items[0];
    console.log(director);
}

getMovieId('dogtooth 2009')