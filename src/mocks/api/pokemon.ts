export interface Pokemon {
  id: number;
  nome: string;
  alturaMetros: number;
  tipos: string[];
}

const BASE = 'https://pokeapi.co/api/v2';


export async function buscarPokemon(nome: string): Promise<Pokemon> {
  const resposta = await fetch(`${BASE}/pokemon/${nome.toLowerCase()}`);

  if (resposta.status === 404) {
    throw new Error(`pokémon não encontrado: ${nome}`);
  }
  if (!resposta.ok) {
    throw new Error(`falha ao consultar a PokéAPI (${resposta.status})`);
  }

  const dados = (await resposta.json()) as {
    id: number;
    name: string;
    height: number;
    types: { type: { name: string } }[];
  };

  return {
    id: dados.id,
    nome: dados.name,
    alturaMetros: dados.height / 10, 
    tipos: dados.types.map((t) => t.type.name),
  };
}
