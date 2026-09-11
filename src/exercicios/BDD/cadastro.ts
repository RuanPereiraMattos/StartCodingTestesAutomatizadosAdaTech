export type Endereco = {
  cep: string
  logradouro: string
  bairro: string
  cidade: string
  uf: string
}

export type NovoCliente = {
  nome: string
  cep: string
}

export type Cliente = {
  nome: string
  endereco: Endereco
}

export type BuscarEndereco = (cep: string) => Promise<Endereco | null>

const FORMATO_DE_CEP = /^\d{5}-?\d{3}$/

export async function cadastrarCliente(
  dados: NovoCliente,
  buscarEndereco: BuscarEndereco = buscarEnderecoNoViaCep,
): Promise<Cliente> {
  if (!FORMATO_DE_CEP.test(dados.cep)) {
    throw new Error('CEP inválido')
  }

  const cep = dados.cep.replace('-', '')
  const endereco = await consultarEndereco(cep, buscarEndereco)

  if (!endereco) {
    throw new Error('CEP não encontrado')
  }

  return { nome: dados.nome, endereco }
}

async function consultarEndereco(
  cep: string,
  buscarEndereco: BuscarEndereco,
): Promise<Endereco | null> {
  try {
    return await buscarEndereco(cep)
  } catch {
    throw new Error('Não foi possível consultar o CEP agora, tente novamente')
  }
}

type RespostaViaCep =
  | { cep: string; logradouro: string; bairro: string; localidade: string; uf: string }
  | { erro: boolean | string }


export async function buscarEnderecoNoViaCep(cep: string): Promise<Endereco | null> {
  const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`)

  if (!resposta.ok) {
    throw new Error(`ViaCEP respondeu com status ${resposta.status}`)
  }

  const dados = (await resposta.json()) as RespostaViaCep
  if ('erro' in dados) return null

  return {
    cep: dados.cep.replace('-', ''),
    logradouro: dados.logradouro,
    bairro: dados.bairro,
    cidade: dados.localidade,
    uf: dados.uf,
  }
}