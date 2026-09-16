export type Item = {
  nome: string
  precoEmCentavos: number
  quantidade: number
}

export type Cupom =
  | { tipo: 'percentual'; percentual: number; validoAte?: Date }
  | { tipo: 'fixo'; valorEmCentavos: number; validoAte?: Date }

export type Carrinho = {
  itens: Item[]
  cupom?: Cupom
}

const VALOR_MINIMO_PARA_FRETE_GRATIS = 20_000
const VALOR_DO_FRETE = 1_500

export function criarCarrinho(): Carrinho {
  return { itens: [] }
}

export function adicionarItem(carrinho: Carrinho, item: Item): Carrinho {
  if (item.quantidade <= 0) {
    throw new Error('Quantidade deve ser maior que zero')
  }

  return { ...carrinho, itens: [...carrinho.itens, item] }
}

export function aplicarCupom(
  carrinho: Carrinho,
  cupom: Cupom,
  agora: Date = new Date(),
): Carrinho {

  if (!cupom.validoAte)
    throw new Error('Cupom precisa ter validade');

  if (agora > cupom.validoAte) 
    throw new Error('Cupom expirado');

  return { ...carrinho, cupom }
}

export function calcularSubtotal(carrinho: Carrinho): number {
  return carrinho.itens.reduce(
    (soma, item) => soma + item.precoEmCentavos * item.quantidade,
    0,
  )
}

export function calcularDesconto(carrinho: Carrinho): number {
  const { cupom } = carrinho
  if (!cupom) return 0

  const subtotal = calcularSubtotal(carrinho)

  switch (cupom.tipo) {
    case 'percentual':
      return Math.round((subtotal * cupom.percentual) / 100)
    case 'fixo':
      return Math.min(cupom.valorEmCentavos, subtotal)
  }
}

export function calcularFrete(carrinho: Carrinho): number {
  if (carrinho.itens.length === 0) return 0

  const valorDosProdutos = calcularSubtotal(carrinho) - calcularDesconto(carrinho)
  return valorDosProdutos >= VALOR_MINIMO_PARA_FRETE_GRATIS ? 0 : VALOR_DO_FRETE
}

export function calcularTotal(carrinho: Carrinho): number {
  return calcularSubtotal(carrinho) - calcularDesconto(carrinho) + calcularFrete(carrinho)
}