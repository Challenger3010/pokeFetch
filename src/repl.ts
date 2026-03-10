import * as readline from "readline";

export function cleanInput(input: string): string[]{
	const pokemons = input
						.trim()
						.toLowerCase()
						.split(" ")
						.filter((word) => word !== "");
	return pokemons;
}

export function startREPL(){
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

	console.log(`Your command was: ${words[0]}`);
	rl.prompt();
});
}
