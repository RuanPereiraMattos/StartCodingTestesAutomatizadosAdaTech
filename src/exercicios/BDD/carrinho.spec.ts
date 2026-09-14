import { adicionarItem, Carrinho, criarCarrinho, Item } from "./carrinho"

describe('function -> criarCarrinho()', () => {
    it('Deve retornar um carrinho novo', () => {
        //Arrange


        //Act
        const carrinho = criarCarrinho();
        console.log('------>', carrinho)

        //Assert
        expect(carrinho).toStrictEqual({ itens: []})
    })
})

describe('function -> adicionarItem(carrinho, item)', () => {
    
    it('deve retornar carrinho sem cupom e novo item', () => {
        //Arrange
        const carrinho: Carrinho = {
            itens:  [
                {nome: 'Sabao', precoEmCentavos:3200, quantidade: 2}
            ]
        }
        const item:Item = {
            nome: 'detergente',
            precoEmCentavos: 1200,
            quantidade: 3
        } 

        console.log(item)


        //Act
        const novoCarrinho = adicionarItem(carrinho, item)

        //Assert
        expect(novoCarrinho).toStrictEqual({
            itens: [
                { nome: 'Sabao', precoEmCentavos:3200, quantidade: 2 },
                { nome: 'detergente', precoEmCentavos: 1200, quantidade: 3 } 
            ]
        })
    })
    
    it('deve lançar um erro caso quantidade vazia', () => {
        //Arrange
        const carrinho: Carrinho = {
            itens:  [
                {nome: 'Sabao', precoEmCentavos:3200, quantidade: 2}
            ]
        }
        const item:Item = {
            nome: 'detergente',
            precoEmCentavos: 1200,
            quantidade: 0
        } 

        console.log(item)


        //Assert
        expect(() => adicionarItem(carrinho, item)).toThrow('Quantidade deve ser maior que zero')
    })

})