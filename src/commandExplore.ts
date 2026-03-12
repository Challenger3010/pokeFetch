import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]){
    const location = await state.api.fetchLocation(args[0]); 
    const encounters = location.pokemon_encounters;

    encounters.forEach((el) => {
        console.log(el.pokemon.name)
    });

}