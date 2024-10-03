const axios = require('axios');

const url = 'https://pokeapi.co/api/v2/pokemon?limit=30'; // Defino URL en variable y establezco el limite de POKEMONS.

const listaPokemon = async () => {

    try {
        const { data } = await axios.get(url); // Para obtener datos de la URL.
        data.results.forEach((pokemon, index) => 
            console.log(`${index + 1}: ${pokemon.name}`) // Para enumerar los datos obtenidos.+1 para que no empiece desde 0.
        );
    } catch (error) {
        console.error('Error, no es posible obtener los datos del POKEMON:', error);
    }
};

listaPokemon();
