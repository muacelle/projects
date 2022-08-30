import movies from './data.json' assert {type: 'json'}; 
import fetch from 'node-fetch';
import _, { groupBy, map, extend } from 'underscore';
import 'dotenv/config';
import fs from 'fs'

function mostWatched (list) {
    let arr = [];
    let count = {};
    list.forEach(elem => { arr.push(elem.director) });             // cria uma arr com todas as entradas de diretores
    arr.forEach(elem => { count[elem] = (count[elem] || 0) + 1 }); // se o diretor ainda não estiver em arr, count[elem] == false -> count[elem] = 0 + 1

    return Object
    .entries(count)                                                // transforma em array
    .sort((a, b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0)); // organiza por ordem dos + assistidos
}

function bestRated(list) {
    let newArr = [];
    let minTwo = mostWatched(list).filter(arr => arr[1] > 1).map(elem => elem[0]);
    let ratings = list.filter(movie => minTwo.includes(movie.director));
    let grouped = _.groupBy(ratings, 'director');
    let result = _.map(grouped, (el) => { 
        let average = getAverage(el);
        return _.extend(el, average);
    })
    result.forEach(el => { newArr.push([el[0].director, parseFloat(el.average)]) });
    return newArr.sort((a, b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0));
}

function getAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].rating;
    }
    let average = (sum / (arr.length)).toFixed(2);
    return { average };
}

let mostWatchedList = mostWatched(movies)
let bestRatedList = bestRated(movies)

let topWatched = mostWatchedList.slice(0, 5);
let topRated = bestRatedList.slice(0, 5);

async function getPictures(list) {
    const newArr = await Promise.all(list.map(async (arr) => {
        if (list == topWatched) {
            const director = arr[0];
            const filmsWatched = arr[1];
            const url = await getPicUrl(arr);
            return {director, filmsWatched, url}
        } else {
            const director = arr[0];
            const rating = arr[1];
            const url = await getPicUrl(arr);
            return {director, rating, url}
        }
    }))

    if (list == topWatched) {
        const json = JSON.stringify(newArr, null, 2)
        fs.writeFileSync('topwatched.json', json)
    } else {
        const json = JSON.stringify(newArr, null, 2)
        fs.writeFileSync('topfive.json', json)
    }
    return newArr;
}

async function getPicUrl(arr) {
    const response = await fetch(`https://imdb-api.com/en/API/SearchName/${process.env.KEY}/${arr[0]}`);
    const data = await response.json();
    const url = data.results[0].image;
    return url;
}

// getPictures(topWatched);
// getPictures(topRated);