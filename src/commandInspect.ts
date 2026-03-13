import { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]){

    const pokemonName = args[0];

    if (!args[0]) {
        console.log("Please provide a Pokemon name");
        return;
    }
    const pokemon = state.pokedex[pokemonName];

    if (!pokemon){
        console.log("you have not caught this pokemon");
        return;
    }

    console.log(`Name: ${pokemon.name}`);
    console.log(`Height: ${pokemon.height}`);
    console.log(`Weight: ${pokemon.weight}`);

    console.log("Stats:");
    pokemon.stats.forEach((s) => {
        console.log(`  -${s.stat.name}: ${s.base_stat}`);
    });

    console.log("Types:");
    pokemon.types.forEach((t) => {
        console.log(`  - ${t.type.name}`);
    });

}