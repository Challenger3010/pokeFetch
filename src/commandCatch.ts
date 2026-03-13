import { State } from "./state.js";

export async function commandCatch(state:State, ...args: string[]) {
    if (!args[0]) {
        console.log("Please provide a Pokemon name");
        return;
    }

    const pokemonName = args[0];

    console.log(`Throwing a Pokeball at ${pokemonName}...`);

    const pokemon = await state.api.fetchPokemon(pokemonName);

    let catchChance = 1 / (1+ pokemon.base_experience / 100);
    catchChance = Math.max(0.1, Math.min(0.8, catchChance))

    const roll = Math.random();

    if (roll < catchChance){
        console.log("Pokemon escaped!");
    }else{
        console.log("Pokemon caught!");
        console.log("You may now inspect it with the inspect command.");
        state.pokedex[pokemon.name] = pokemon;
    }



    
}