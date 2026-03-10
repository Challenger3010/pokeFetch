export function cleanInput(input: string): string[]{
	const pokemons = input.trim().split(" ");
	return pokemons;
}

