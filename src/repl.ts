import { State } from "./state.js";

export function cleanInput(input: string): string[]{
	const pokemons = input
						.trim()
						.toLowerCase()
						.split(" ")
						.filter((word) => word !== "");
	return pokemons;
}

export function startREPL(state: State){

state.interface.prompt();

state.interface.on("line", async (input) => {
	const words = cleanInput(input);

	if (words.length === 0){
		state.interface.prompt();
		return;
	}

	const commandName = words[0]
	const cmd = state.commands[commandName];

	if (! cmd){

		console.log("Unknown command");
		state.interface.prompt();
		return;

	}
	try{

		cmd.callback(state);
	} catch (e){
		console.log(e);
	}

	state.interface.prompt();
});
}