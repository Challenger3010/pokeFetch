import { commandHelp } from "./command_help.js";
import { commandExit } from "./command_exit.js";
import { commandMap, commandMapB } from "./commandMap.js";
import { commandExplore } from "./commandExplore.js";

import type { CLICommand } from "./state.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    exit: {
      name: "exit",
      description: "Exit the Pokedex",
      callback: commandExit,
    },
    map: {
        name: "map",
        description: "Display the next 20 names of locations",
        callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "Display the previous 20 names of locations",
      callback: commandMapB,
    },
    explore: {
      name: "explore",
      description: "See a list of all Pokemons in the given area",
      callback: commandExplore,
    },
  };
}