import { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]){
    if (!args[0]) {
    console.log("Please provide a location name");
    return;
}
    const location = await state.api.fetchLocation(args[0]); 
    const encounters = location.pokemon_encounters;

    encounters.forEach((el) => {
        console.log(el.pokemon.name)
    });

}