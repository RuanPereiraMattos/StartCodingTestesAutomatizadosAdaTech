import { montarFicha } from "./pokedex"


const { buscarPokemonMock } = vi.hoisted(() => ({ buscarPokemonMock: vi.fn() }))


vi.mock('./pokemon', async (importOriginal) => {
  const original = await importOriginal<typeof import('./pokemon')>();
  
  return { ...original, buscarPokemon: buscarPokemonMock };
});

describe('montarFicha', () => {
    it('deve montar ficha do pokemon', async () => {
        //Arrange
       buscarPokemonMock.mockResolvedValue({
        id: 25,
        nome: 'pikachu',
        alturaMetros: 0.5,
        tipos: ['water'],
       })
       const name = 'pikachu'

        //Act
        const result = await montarFicha(name)


        //Assert
        console.log(result)
        // expect(result).toEqual({
        //     titulo: 'asas',
        //     tipoPrincipal: 'asas',
        //     grande: false
        // })
    })

})