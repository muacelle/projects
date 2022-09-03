
async function start() {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    createBreedList(data.message)
}

function createBreedList(breedList) {                     // 11?
    const options = document.getElementById('breed');    
    options.innerHTML = `
    <select onchange="loadBreed(this.value)">
        <option>Choose a dog breed</option>
        ${Object.keys(breedList).map((breed) => {
            return `<option>${breed}</option>`
        })}
    </select>`
}

async function loadBreed(value) {
    if (value !== 'Choose a dog breed') {
        const response = await fetch(`https://dog.ceo/api/breed/${value}/images/random`);
        const data = await response.json();
        getDog(data.message);
    }
}

function getDog(imgsrc) {
    document.getElementById("image").innerHTML = `
    <div id="image" style="background-image: url('${imgsrc}')"></div>`
}

start()