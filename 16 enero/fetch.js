// obtener peticion get a api 
const API_URL = 'https://pokeapi.co/api/v2';

const btn = document.getElementById('btn-fetch');

btn.addEventListener('click', async () => {
    const pokemons = await fetchPokemon();
    //pokemons.forEach(pokemon => console.log(pokemon))
    for (let i = 0; i < pokemons.length; i++) {
        console.log(pokemons[i]);
    }
})

const fetchPokemon = async () => {
        try {
        const data = await fetch(`${API_URL}/pokemon?limit=100`);
        const parsedData = await data.json();
        return parsedData.results;
        } catch(err) {
            console.error(err)
        }
        
}