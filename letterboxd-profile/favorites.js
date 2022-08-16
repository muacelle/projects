import movies from './data.json' assert {type: 'json'}; 
import _, { groupBy, map, extend } from 'underscore';

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

console.log(mostWatched(movies))
console.log(bestRated(movies))