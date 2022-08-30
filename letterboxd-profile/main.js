import { parse } from 'csv-parse/sync';
import fs from 'fs'
import fetch from 'node-fetch';
import 'dotenv/config';

//My CSV Reader

const ratingsCsv = fs.readFileSync('ratings.csv', 'utf-8').toString();

const ratingsObj = parse(ratingsCsv, {
    columns: true,
    skip_empty_lines: true
});

const movielist = ratingsObj.slice(12, 13);

// Getting Data from IMDB API 

async function getMoviesFromCsv(movies) {
    const response = await Promise.all(movies.map(async (movie) => {
        const title = movie.Name;
        const rating = parseFloat(movie.Rating);
        const director = await getMovieID(movie.Name, movie.Year);
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

async function getMovieID(name, year) {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${process.env.KEY}/${name} ${year}`);
    const data = await response.json();
    const movieId = data.results[0].id;
    const result = await getDirectorName(movieId)
    .catch((error) => { const result = tryThisInstead(name); return result });
    return result;
}

async function tryThisInstead(name) {
    const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${process.env.KEY}/${name}`);
    const data = await response.json();
    console.log(data.results[0].title);
    const movieId = data.results[0].id;
    const result = await getDirectorName(movieId);
    return result;
}

let photoList = [];

async function getDirectorName(movieid) {
    let response = await fetch(`https://imdb-api.com/en/API/FullCast/${process.env.KEY}/${movieid}`);
    let data = await response.json();
    let director = data.directors.items[0].name;
    let directorID = data.directors.items[0].id;
    let pic = await getDirectorPhoto(directorID);
    photoList.push(pic);
    return director;
}

async function getDirectorPhoto(id) {
    let response = await fetch(`https://imdb-api.com/en/API/Name/${process.env.KEY}/${id}`);
    let data = await response.json();
    let name = data.name;
    let pic = data.image;
    return {name, pic};
}

(async () => {
    const movies = await getMoviesFromCsv(movielist);
    console.log('Saved!');
    console.log(photoList);
})().catch(error => {
    console.log('deu erro :(');
    console.log(error);
})