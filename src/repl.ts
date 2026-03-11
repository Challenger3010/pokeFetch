import * as readline from "readline";
import { getCommands } from "./commands.js";

export function cleanInput(input: string): string[]{
	const pokemons = input
						.trim()
						.toLowerCase()
						.split(" ")
						.filter((word) => word !== "");
	return pokemons;
}

export function startREPL(){

const commands = getCommands();
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
	prompt: "Pokedex > ",
});

rl.prompt();

rl.on("line", async (input) => {
	const words = cleanInput(input);

	if (words.length === 0){
		rl.prompt();
		return;
	}

	let command = commands[words[0]];

	if (command){
		command.callback(words.slice(1), commands);
	}else{
		console.log("Unknown command");
	}


	rl.prompt();
});
}