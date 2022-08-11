import { parse } from 'csv-parse/sync';
import fs from 'fs'
import fetch from 'node-fetch';

const keys = ['k_1p25wqxl', 'k_sfmpwgoj', 'k_u8c5djz6', 'k_b7lg0d6i'];
let key = keys[3];

const ratingsCsv = fs.readFileSync('ratings.csv', 'utf-8').toString();

const ratingsObj = parse(ratingsCsv, {
    columns: true,
    skip_empty_lines: true
});

const movielist = ratingsObj.slice(125, 135);   // os primeiros estão bugados? 10-100-125

async function getDirectorByMovieName(name, year) {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${key}/${name} ${year}`);
    const data = await response.json();
    const movieId = data.results[0].id;
    const result = await getDirector(movieId);
    return result;
}

async function getDirector(movieid) {
    let response = await fetch(`https://imdb-api.com/en/API/FullCast/${key}/${movieid}`);
    let data = await response.json();
    let director = data.directors.items[0].name;
    return director;
}

async function directorsRatings(movies) {
    const response = await Promise.all(movies.map(async (movie) => {
        const title = movie.Name;
        const rating = parseFloat(movie.Rating);
        const director = await getDirectorByMovieName(movie.Name, movie.Year);
        return { title, director, rating };  
    }))

    // save response here
    let data = fs.readFileSync('data.json');   
    let completeList = JSON.parse(data);
    const updatedList = [...completeList, ...response];
    let jsonstr = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync('data.json', jsonstr);
    return updatedList;
}

function getFavorites (list) {
    let arr = [];
    let count = {};
    list.forEach(elem => { arr.push(elem.director) });             // cria uma arr com todas as entradas de diretores
    arr.forEach(elem => { count[elem] = (count[elem] || 0) + 1 }); // se o diretor ainda não estiver em arr, count[elem] == false -> count[elem] = 0 + 1

    return Object
    .entries(count)                                                // transforma em array
    .sort((a, b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0)); // organiza por ordem dos + assistidos
}

(async () => {
    const movies = await directorsRatings(movielist);
    console.log('Saved!');
})()

//const grouped = getFavorites(movies);