// Fetch
//
// POST

const BASE_URL = 'https://pokeapi.co/api/v2/';

// Fetch no async
/*
fetch(BASE_URL + 'pokemon/ditto')
    .then(res => res.json())
    .then(data => console.log(data));
*/
// fetch async

const fetchPokemon = async (pokemon) => {
    try {
        const response = await fetch(`${BASE_URL}pokemon/${pokemon}`);
        const parsedResponse = await response.json();
        return parsedResponse;
    } catch (err) {
        console.error(err);
    }
}

updatePokemon = function (pokemon) {
    console.log('voy a poner a...', pokemon)
    let pokemonId = document.getElementById('pokemonId');
    let pokemonId2 = document.getElementById('pokemonId2');
    let pokemonName = document.getElementById('pokemonName');
    let pokemonWeight = document.getElementById('pokemonWeight');
    pokemonId.textContent = "#"+pokemon.id;
    pokemonId2.textContent = "#"+pokemon.id;
    pokemonName.textContent = pokemon.name;
    pokemonWeight.textContent = pokemon.Weight;

    let pokemonSrc = document.getElementById('pokemonSrc');
    let pokemonNewSrc = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"//pokemon.sprites.other['official-artwork'].front_defaul;
    pokemonSrc.setAttribute('src', pokemonNewSrc)
    console.log(pokemon.sprites.other['official-artwork'].front_default)
}



// Obtener pokemon
document.getElementById('get-btn')
    .addEventListener('click', async () => {
        const text = document.getElementById('poke-name').value.toLowerCase();
        const pokemon = await fetchPokemon(text);
        console.log('pokemon->', pokemon)
        localStorage.setItem('currentPokeId', pokemon.id);
        console.log(pokemon.name);
        this.updatePokemon(pokemon)
    })

document.addEventListener('DOMContentLoaded', async () => {
    const storedId = localStorage.getItem('currentPokeId');
    const initialId = storedId ? parseInt(storedId) : 1;
    const pokemon = await fetchPokemon(initialId);
    console.log(pokemon.name);
})

// obtener el anterior
//
//
// obtener el siguiente

document.getElementById('previous-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = Math.max(1, currentPokeId -1);
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon.name);
    })

document.getElementById('next-btn')
    .addEventListener('click', async () => {
        const currentPokeId = parseInt(localStorage.getItem('currentPokeId'));
        const newId = currentPokeId + 1;
        const pokemon = await fetchPokemon(newId);
        console.log(pokemon);
    })



////////////////// POST
//


// // fetch () {
//      method: 'POST',
//      body: JSON.stringify({
//          title: 'pokemonName',
//          body: 'weight',
//          userId: 1,
//      }),
//      headers: {
//          'Content-type': 'application/json; charset=UTF-8',
//     }
// }).then(res => res.json())
//      .then(json => console.log(json))





/////////////////// EJERCICIOS
//- Arreglar el pokemon en localStorage
// - Manipular el DOM y agregar una tarjeta del pokemon.
// - El tamaño e info de la tarjeta es a consideración personal.
// - La tarjeta debe mantenerse en la pantalla.
// - La info -> LocalStorage -> Fetch
