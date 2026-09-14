import { cadastrarCliente, NovoCliente } from "./cadastro"

type EnderecoMock = {
  cep: string
  logradouro: string
  bairro: string
  localidade: string
  uf: string
}

function createResolveMock(responseMock: EnderecoMock) {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({
        ok: true,
        json: async () => responseMock
    }))
}



describe('function -> cadastrarCliente', () => {

    afterEach(() => {
        vi.unstubAllGlobals()
        vi.restoreAllMocks()
    })

    it('deve retornar endereço valido', async () => {
        // Arrange
        createResolveMock({
            cep: '11111-221',
            logradouro: 'Rua da paz',
            bairro: 'Bairro de cima',
            localidade: 'Porto Alegre',
            uf: 'RS'
        })
      

        const cliente: NovoCliente = {
            cep: '17206438',
            nome: 'Bruno'
        }


        // Act
        const result = await cadastrarCliente(cliente)
        console.log(result)

        // Assert
    })
})