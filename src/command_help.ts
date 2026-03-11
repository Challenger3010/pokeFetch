import type { CLICommand } from "./commands.js";

export function commandHelp(args: string[], commands: Record<string, CLICommand>) {
    console.log("Welcome to the Pokedex!");
    console.log("Usage:\n");
    for (const key in commands){
        console.log(commands[key].name + ": " + commands[key].description);
    }
}