import { adicionarItem, aplicarCupom, calcularDesconto, calcularFrete, calcularSubtotal, calcularTotal, Carrinho, criarCarrinho, Cupom, Item } from "./carrinho";

describe("Criar Carrinho", () => {
    it("Criar Carrinho vazio", () => {
        expect(criarCarrinho()).toEqual({itens:[]});
    });
});

describe("Adicionar Item", () => {
    
    it("Adicionar Item com quantidade válida", () => {
        const carrinhoVazio: Carrinho = { itens: [] }
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinhoComItem: Carrinho = {
            itens: [ item ]
        };
        const novoCarrinho:Carrinho = adicionarItem(carrinhoVazio, item);
        expect(novoCarrinho).toEqual(carrinhoComItem);
    });

    it("Adicionar Múltiplos itens ", () => {
        const carrinhoVazio: Carrinho = { itens: [] };
        const item1: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const item2: Item = {
            nome: "Sabão Líquido",
            precoEmCentavos: 3500,
            quantidade: 2
        };
        const carrinhoComItens: Carrinho = {
            itens: [ item1, item2 ]
        };
        let novoCarrinho:Carrinho = adicionarItem(carrinhoVazio, item1);
        novoCarrinho = adicionarItem(novoCarrinho, item2);
        expect(novoCarrinho).toEqual(carrinhoComItens);
    });

    it("Rejeitar item com quantidade zero", () => {
        const carrinhoVazio: Carrinho = { itens: [] };
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 0
        };
        expect(() => adicionarItem(carrinhoVazio, item)).toThrow('Quantidade deve ser maior que zero')
    });

    it("Rejeitar item com quantidade negativa", () => {
        const carrinhoVazio: Carrinho = { itens: [] };
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: -1
        };
        expect(() => adicionarItem(carrinhoVazio, item)).toThrow('Quantidade deve ser maior que zero')
    });

});

describe("Aplicar Cupom:", () => {

    it('Com percentual sem validade', () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens:[ item ] };
        const cupom: Cupom = { tipo: "percentual", percentual: 1 };
        expect(() => aplicarCupom(carrinho, cupom)).toThrow('Cupom precisa ter validade');
    });

    it('Com valor fixo sem validade', () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const cupom: Cupom = { tipo: "fixo", valorEmCentavos: 1 };
        const carrinho: Carrinho = { itens:[ item ], cupom };
        expect(() => aplicarCupom(carrinho, cupom)).toThrow("Cupom precisa ter validade");
    });

    it('Aplicar cupom dentro da validade', () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const validoAte = new Date(Date.now());
        const cupomFixo: Cupom = {
            tipo: 'fixo',
            valorEmCentavos: 100,
            validoAte
        };
        const carrinho: Carrinho = { itens:[ item ], cupom: cupomFixo };
        //const dataAtualMilisegundos:number = Date.now();
        //const validoAte = new Date(dataAtualMilisegundos + ((60 * 60) * 24) * 1000);
        //console.log(new Date(validoAte).toDateString());
        //const cupom: Cupom = { tipo: "fixo", valorEmCentavos: 1, validoAte};
        const cupomAplicado: Carrinho = aplicarCupom(carrinho, cupomFixo);
        expect(cupomAplicado).toEqual(carrinho);
    });

    it('Rejeitar cupom expirado', () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens:[ item ] };
        const cupom: Cupom = { tipo: "fixo", valorEmCentavos: 1, validoAte: new Date(Date.now() - ((60 * 60) * 24) * 1000) };
        expect(() => aplicarCupom(carrinho, cupom)).toThrow("Cupom expirado");
    });

});

describe("Calcular Sobtotal:", () => {

/*
**Cenário: subtotal de carrinho vazio**
- **Dado** um carrinho vazio
- **Quando** `calcularSubtotal` é chamado
- **Então** retorna `0`
*/

    it("Subtotal de carrinho vazio", () => {
        const carrinho: Carrinho = { itens: [] };
        expect(calcularSubtotal(carrinho)).toEqual(0);
    });

    /*
**Cenário: subtotal com um item**
- **Dado** um carrinho com 1 item de preço `1000` e quantidade `2`
- **Quando** `calcularSubtotal` é chamado
- **Então** retorna `2000`
*/
    it("Subtotal com um item", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 1000,
            quantidade: 2
        };
        const carrinho: Carrinho = { itens: [ item ] };
        expect(calcularSubtotal(carrinho)).toEqual(2000);
    });

    /*
    **Cenário: subtotal com múltiplos itens**
- **Dado** um carrinho com item A (`preço 500, qtd 3`) e item B (`preço 1000, qtd 2`)
- **Quando** `calcularSubtotal` é chamado
- **Então** retorna `3500`
    */
    it("Subtotal com múltiplos itens", () => {
        const itemA: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 500,
            quantidade: 3
        };
        const itemB: Item = {
            nome: "Sabão Líquido",
            precoEmCentavos: 1000,
            quantidade: 2
        }
        const carrinho: Carrinho = { itens: [ itemA, itemB ] };
        expect(calcularSubtotal(carrinho)).toEqual(3500);
    });
});

describe("Calcular Desconto:", () => {
    
/*
**Cenário: sem cupom aplicado**
- **Dado** um carrinho sem cupom
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `0`
*/
    it("Sem cupom aplicado", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 1000,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularDesconto(carrinho)).toEqual(0);
    });

/*
**Cenário: cupom percentual**
- **Dado** um carrinho com subtotal `10000` e cupom `10%`
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `1000`
*/
    it("Cupom percentual", () => {
        const itemA: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 5000,
            quantidade: 1
        };
        const itemB: Item = {
            nome: "Sabão Líquido",
            precoEmCentavos: 5000,
            quantidade: 1
        }
        const cupom: Cupom = { tipo: 'percentual', percentual: 10, validoAte: new Date() };
        const carrinho: Carrinho = { itens: [itemA, itemB], cupom };
        //const subtotal = calcularSubtotal(carrinho);
        expect(calcularDesconto(carrinho)).toEqual(1000);
    });

/*
**Cenário: cupom fixo menor que o subtotal**
- **Dado** um carrinho com subtotal `10000` e cupom fixo de `2000`
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `2000`
*/
    it("Cupom fixo menor que o subtotal", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 10000,
            quantidade: 1
        };
        const cupom: Cupom = { tipo: "fixo", valorEmCentavos: 2000, validoAte: new Date() };
        const carrinho: Carrinho = { itens: [ item ], cupom};
        expect(calcularDesconto(carrinho)).toEqual(2000);
    });

/*
**Cenário: cupom fixo maior que o subtotal (desconto limitado ao subtotal)**
- **Dado** um carrinho com subtotal `1000` e cupom fixo de `5000`
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `1000` (não pode ser maior que o subtotal)
*/
    it("Cupom fixo maior que o subtotal(", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 1000,
            quantidade: 1
        };
        const cupom: Cupom = { tipo: "fixo", valorEmCentavos: 5000, validoAte: new Date() };
        const carrinho: Carrinho = { itens: [ item ], cupom};
        expect(calcularDesconto(carrinho)).toEqual(1000);
    });

});

describe("Calcular Frete:", () => {
    const mocks = [
        {
            preco: 19_999,
            frete: 1_500
        },
        {
            preco: 20_000,
            frete: 0
        },
        {
            preco: 25_000,
            frete: 0
        }
    ]

/*
**Cenário: carrinho vazio não gera frete**
- **Dado** um carrinho vazio
- **Quando** `calcularFrete` é chamado
- **Então** retorna `0`
*/
    it("Carrinho vazio não gera frete", () => {
        const carrinho: Carrinho = { itens: [] };
        expect(calcularFrete(carrinho)).toEqual(0);
    });

/*
**Cenário: valor líquido abaixo do mínimo para frete grátis**
- **Dado** um carrinho com subtotal de `19999` e sem cupom
- **Quando** `calcularFrete` é chamado
- **Então** retorna `1500`
*/
    it("Valor líquido abaixo do mínimo para frete grátis", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 19999,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularFrete(carrinho)).toEqual(1500);
    });

/*
**Cenário: valor líquido exatamente no mínimo para frete grátis**
- **Dado** um carrinho com subtotal de `20000` e sem cupom
- **Quando** `calcularFrete` é chamado
- **Então** retorna `0`
*/
    it("Valor líquido exatamente no mínimo para frete grátis", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 20000,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularFrete(carrinho)).toEqual(0);
    });

/*
**Cenário: valor líquido acima do mínimo para frete grátis**
- **Dado** um carrinho com subtotal de `25000` e sem cupom
- **Quando** `calcularFrete` é chamado
- **Então** retorna `0`
*/
    it("Valor líquido exatamente no mínimo para frete grátis", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 25000,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularFrete(carrinho)).toEqual(0);
    });

/*
**Cenário: desconto faz o valor cair abaixo do mínimo para frete grátis**
- **Dado** um carrinho com subtotal `21000` e cupom fixo de `1001`
- **Quando** `calcularFrete` é chamado
- **Então** retorna `1500` (valor líquido = `19999`)
*/
    it("Desconto faz o valor cair abaixo do mínimo para frete grátis", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 21000,
            quantidade: 1
        };
        const cupom: Cupom = { tipo: 'fixo', valorEmCentavos: 1001, validoAte: new Date() };
        const carrinho: Carrinho = { itens: [item], cupom };
        expect(calcularFrete(carrinho)).toEqual(1500);
    });

    //Igual a todos os acima mas dentro de apenas um
    it.each(mocks)("Descrição genérica", ({preco, frete}) => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: preco,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularFrete(carrinho)).toEqual(frete);
    })
});

describe("Calcular Total:", () => {
    
/*
**Cenário: total sem desconto e com frete**
- **Dado** um carrinho com subtotal `10000` e sem cupom
- **Quando** `calcularTotal` é chamado
- **Então** retorna `11500` (subtotal + frete)
*/
    it("Total sem desconto e com frete", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 10_000,
            quantidade: 1
        };
        //const cupom: Cupom = { tipo: 'fixo', valorEmCentavos: 1001, validoAte: new Date() };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularTotal(carrinho)).toEqual(11_500);
    });

/*
**Cenário: total com cupom e com frete**
- **Dado** um carrinho com subtotal `10000` e cupom de `10%`
- **Quando** `calcularTotal` é chamado
- **Então** retorna `10500` (`9000` líquido + `1500` frete)
*/
    it("Total com cupom e com frete", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 10_000,
            quantidade: 1
        };
        const cupom: Cupom = { tipo: 'percentual', percentual: 10, validoAte: new Date() };
        const carrinho: Carrinho = { itens: [item], cupom };
        expect(calcularTotal(carrinho)).toEqual(10_500);
    });

/*
**Cenário: total com frete grátis**
- **Dado** um carrinho com subtotal `20000` e sem cupom
- **Quando** `calcularTotal` é chamado
- **Então** retorna `20000` (sem frete)
*/
    it("Total com frete grátis", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 20_000,
            quantidade: 1
        };
        //const cupom: Cupom = { tipo: 'percentual', percentual: 10, validoAte: new Date() };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularTotal(carrinho)).toEqual(20_000);
    });

/*
**Cenário: total de carrinho vazio**
- **Dado** um carrinho vazio
- **Quando** `calcularTotal` é chamado
- **Então** retorna `0`
*/
    it("Total de carrinho vazio", () => {
        const carrinho: Carrinho = { itens: [] };
        expect(calcularTotal(carrinho)).toEqual(0);
    });

});