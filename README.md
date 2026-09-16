# Testes Automatizados — Ada Tech

Projeto de aprendizado de testes unitários automatizados com TypeScript e Vitest. Organizado em exemplos guiados e exercícios práticos com BDD.

## Tecnologias

- [Vitest](https://vitest.dev/) — framework de testes
- TypeScript com ES Modules
- `@vitest/coverage-v8` — cobertura de código
- Yarn 1.x

## Como executar

```bash
# Instalar dependências
yarn install

# Rodar testes em modo watch
yarn test

# Rodar uma única vez (sem watch)
yarn test run

# Rodar com cobertura (watch)
yarn test:cov

# Rodar com cobertura uma única vez (CI)
yarn test:ci
```

## Estrutura do projeto

```
src/
├── imc.ts                        # Módulo principal de cálculo de IMC
├── imc.test.ts                   # Testes do módulo de IMC
├── tabela-imc.ts                 # Tabela de classificação de IMC pré-computada
│
├── exemplos/
│   ├── helpers/
│   │   ├── calculadora/          # Operações aritméticas básicas
│   │   ├── imc/                  # Versão simplificada do IMC (exemplo)
│   │   └── texto/                # Utilitários de string
│   └── mocks/
│       └── api/                  # Exemplo de mock de fetch (PokéAPI)
│
└── exercicios/
    └── BDD/
        ├── carrinho.ts           # Lógica de carrinho de compras
        ├── carrinho.test.ts      # Testes BDD do carrinho
        ├── carrinho-cenarios.md  # Especificação BDD (Dado/Quando/Então)
        ├── cadastro.ts           # Cadastro de clientes com consulta de CEP
        └── cadastro.test.ts      # Testes do cadastro com mocks de fetch
```

## Módulos

### IMC (`src/imc.ts`)

Calcula e classifica o Índice de Massa Corporal (IMC):

- `calcularIMC(peso, altura)` — fórmula `peso / altura²`
- `classificarIMC(imc)` — classifica um valor numérico segundo a OMS
- `classificarIMCPorTabela(peso, altura)` — lookup em tabela pré-computada; lança erro se a combinação não existir

### Calculadora (`src/exemplos/helpers/calculadora/`)

Operações básicas: `somar`, `subtrair`, `multiplicar`, `dividir`. Lança erro em divisão por zero.

### Texto (`src/exemplos/helpers/texto/`)

Utilitários de string: `inverterTexto`, `contarVogais` (suporta acentuação), `capitalize`, `isPalindromo`.

### Carrinho de compras (`src/exercicios/BDD/carrinho.ts`)

Carrinho imutável com valores em centavos:

- `criarCarrinho()` — cria um carrinho vazio
- `adicionarItem(carrinho, item)` — retorna novo carrinho; lança se quantidade <= 0
- `aplicarCupom(carrinho, cupom)` — percentual ou valor fixo; lança se expirado
- `calcularSubtotal`, `calcularDesconto`, `calcularFrete`, `calcularTotal`

Frete grátis para compras acima de R$ 200,00; R$ 15,00 caso contrário; sem frete para carrinho vazio.

### Cadastro de clientes (`src/exercicios/BDD/cadastro.ts`)

- `cadastrarCliente(dados, buscarEndereco?)` — valida formato do CEP e busca endereço via injeção de dependência
- `buscarEnderecoNoViaCep(cep)` — implementação de produção usando a API pública [ViaCEP](https://viacep.com.br/)

## Abordagem BDD

O exercício do carrinho segue o fluxo BDD completo:

1. Cenários escritos em português (Dado/Quando/Então) em [`carrinho-cenarios.md`](src/exercicios/BDD/carrinho-cenarios.md)
2. Testes implementados em [`carrinho.test.ts`](src/exercicios/BDD/carrinho.test.ts) refletindo fielmente os cenários
3. Código de produção em [`carrinho.ts`](src/exercicios/BDD/carrinho.ts) escrito para satisfazer os testes

## Mocks

O projeto demonstra duas estratégias de mock com Vitest:

- **`vi.stubGlobal`** — substituição do `fetch` global nos testes de cadastro
- **`vi.hoisted` + `vi.mock`** — padrão para mockar módulos externos (demonstrado nos testes de Pokédex)
