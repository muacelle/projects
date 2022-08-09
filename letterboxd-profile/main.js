import { parse } from 'csv-parse/sync';
import fs from 'fs'
import fetch from 'node-fetch';

const ratingsCsv = fs.readFileSync('ratings.csv', 'utf-8').toString();

const ratingsObj = parse(ratingsCsv, {
    columns: true,
    skip_empty_lines: true
});

const last5 = ratingsObj.slice(-2);

async function getDirectorByMovieName(nameyear) {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_1p25wqxl/${nameyear}`);
    const data = await response.json();
    const movieId = data.results[0].id;
    const result = await getDirector(movieId);
    return result;
}

async function getDirector(movieid) {
    let response = await fetch(`https://imdb-api.com/en/API/FullCast/k_1p25wqxl/${movieid}`);
    let data = await response.json();
    let director = data.directors.items[0].name;
    return director;
}

async function directorsRatings(movies) {
    const response = await Promise.all(movies.map(async (movie) => {
        const movieName = await getDirectorByMovieName(movie.Name);
        const rating = parseFloat(movie.Rating);
        return { movieName, rating };
    }))
    console.log(response);
    return response;
}

directorsRatings(last5);