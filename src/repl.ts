import { State } from "./state.js";

export function cleanInput(input: string): string[]{
	const pokemons = input
						.trim()
						.toLowerCase()
						.split(" ")
						.filter((word) => word !== "");
	return pokemons;
}

export async function startREPL(state: State){

state.interface.prompt();

state.interface.on("line", async (input) => {
	const words = cleanInput(input);

	if (words.length === 0){
		state.interface.prompt();
		return;
	}

	const commandName = words[0]
	const cmd = state.commands[commandName];
	const args = words.slice(1);

	if (! cmd){
		console.log(`Unknown command: "${commandName}". Type "help" for a list of commands.`);
		state.interface.prompt();
		return;
	}

	try{
		await cmd.callback(state, ...args);

	} catch (e){

		console.log(e);
	}

	state.interface.prompt();
});
}