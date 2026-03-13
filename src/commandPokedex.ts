import { State } from "./state.js";

export async function commandPokedex(state: State, ...args: string[]) {

    if (Object.keys(state.pokedex).length === 0){
        console.log("Your Pokedex is empty!");
        return 
    }

    console.log("Your Pokedex:");

    for (const [key,val] of Object.entries(state.pokedex)){
        console.log(`- ${key}`);
    }
    
}