import { buscarPokemon, type Pokemon } from './pokemon';

export interface FichaPokemon {
  titulo: string;
  tipoPrincipal: string;
  grande: boolean;
}

export async function montarFicha(nome: string): Promise<FichaPokemon> {
  const pokemon: Pokemon = await buscarPokemon(nome);

  console.log('mock ---> ', pokemon)

  return {
    titulo: `#${pokemon.id} ${pokemon.nome.toUpperCase()}`,
    tipoPrincipal: pokemon.tipos[0] ?? 'desconhecido',
    grande: pokemon.alturaMetros >= 1.5,
  };
}
