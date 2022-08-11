const films = [
    { title: 'Amateur', director: 'Hal Hartley', rating: 4 },
    { title: 'Maelström', director: 'Denis Villeneuve', rating: 4.5 },
    { title: 'The Great Beauty', director: 'Paolo Sorrentino', rating: 3 },
    { title: 'Women on the Verge of a Nervous Breakdown', director: 'Pedro Almodóvar', rating: 4 },
    { title: 'Crimes of the Future', director: 'David Cronenberg', rating: 3}, 
    { title: 'Arrival', director: 'Denis Villeneuve', rating: 5 },
    { title: 'Volver', director: 'Pedro Almodóvar', rating: 4 }
];

function getFavorites (list) {
    let arr = [];
    let count = {};
    list.forEach(elem => { arr.push(elem.director) });             // cria uma arr com todas as entradas de diretores
    arr.forEach(elem => { count[elem] = (count[elem] || 0) + 1 }); // se o diretor ainda não estiver em arr, count[elem] == false -> count[elem] = 0 + 1
    //se o diretor já existir em arr, count[elem] = true (number) -> count[elem] = 1 + 1

    return Object
    .entries(count)                                                // transforma em array
    .sort((a, b) => (a[1] > b[1]) ? -1 : ((b[1] > a[1]) ? 1 : 0)); // organiza por ordem dos + assistidos
}

console.log(getFavorites(films));