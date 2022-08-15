import movies from './data.json' assert {type: 'json'}; 

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
    const grouped = getFavorites(movies);
    console.log(grouped);
})()