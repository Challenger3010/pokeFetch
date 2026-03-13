import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeApi, Pokemon } from "./pokeapi.js";

export type State = {
    interface: Interface,
    commands: Record<string, CLICommand>,
    api: PokeApi,
    nextLocationsURL: string,
    prevLocationsURL: string, 
    pokedex: Record<string, Pokemon>,
};

export type CLICommand = {
    name: string,
    description: string,
    callback: (state: State, ...args: string[]) => Promise<void>;
};

export function initState(cacheInterval: number): State{
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });

    let initState: State = {
        commands: getCommands(),
        interface: rl,
        api: new PokeApi(cacheInterval),
        nextLocationsURL: "",
        prevLocationsURL: "",
        pokedex: {}
    };

    return initState;
}

