import { createInterface, type Interface } from "readline";
import { getCommands } from "./commands.js";
import { PokeApi } from "./pokeapi.js";

export type State = {
    interface: Interface,
    commands: Record<string, CLICommand>,
    api: PokeApi,
    nextLocationsURL: string,
    prevLocationsURL: string, 
};

export type CLICommand = {
    name: string,
    description: string,
    callback: (state: State) => Promise<void>;
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
    };

    return initState;
}

