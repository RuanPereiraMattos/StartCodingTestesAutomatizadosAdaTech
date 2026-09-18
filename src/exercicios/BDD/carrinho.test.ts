import { describe, it, expect } from "vitest";
import { adicionarItem, aplicarCupom, calcularDesconto, calcularFrete, calcularSubtotal, Carrinho, criarCarrinho, Cupom, Item } from "./carrinho";

describe("Carrinho", () => {
    
    it("criarCarrinho()", () => {
        const carrinho: Carrinho = criarCarrinho();
        expect(carrinho).toEqual({ itens: [] });
    });

    it("adicionarItem()", () => {
        const carrinho: Carrinho = { itens: [] };
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const novoCarrinho = adicionarItem(carrinho, item);
        expect(novoCarrinho).toEqual({ itens: [item] });
    });

    it("adicionarItem() lança erro com quantidade zero", () => {
        const carrinho: Carrinho = { itens: [] };
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 0
        };
        expect(() => adicionarItem(carrinho, item)).toThrow("Quantidade deve ser maior que zero");
    });

    it("adicionarItem() lança erro com quantidade negativa", () => {
        const carrinho: Carrinho = { itens: [] };
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: -1
        };
        expect(() => adicionarItem(carrinho, item)).toThrow("Quantidade deve ser maior que zero");
    });

    it("aplicarCupom()", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        const cupom: Cupom = { 
            tipo: 'percentual',
            percentual: 1,
            validoAte: new Date(Date.now() + 60 * 60 * 1000)
        }
        expect(aplicarCupom(carrinho, cupom)).toEqual({ itens: carrinho.itens, cupom });
    });

    it("aplicarCupom() cupom expirado", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        const cupom: Cupom = { 
            tipo: 'percentual',
            percentual: 1,
            validoAte: new Date(Date.now() - 60 * 60 * 1000)
        }
        expect(() => aplicarCupom(carrinho, cupom)).toThrow("Cupom expirado");
    });

    it("calcularSubtotal() com carrinho vazio", () => {
        const carrinho: Carrinho = { itens: [] };
        expect(calcularSubtotal(carrinho)).toEqual(0);
    });

    it("calcularSubtotal() com 1 item e 1 quantidade", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularSubtotal(carrinho)).toEqual(2500);
    });

    it("calcularSubtotal() com 1 item e x quantidade", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 2
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularSubtotal(carrinho)).toEqual(5000);
    });

    it("calcularSubtotal() com x itens e 1 quantidade", () => {
        const itemA: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const itemB: Item = {
            nome: "Sabão em Barra",
            precoEmCentavos: 1500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [ itemA, itemB ] };
        expect(calcularSubtotal(carrinho)).toEqual(4000);
    });

    it("calcularSubtotal() com x itens e x quantidade", () => {
        const itemA: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const itemB: Item = {
            nome: "Sabão em Barra",
            precoEmCentavos: 1500,
            quantidade: 2
        };
        const carrinho: Carrinho = { itens: [ itemA, itemB ] };
        expect(calcularSubtotal(carrinho)).toEqual(5500);
    });

    it("calcularDesconto() carrinho sem cupom", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [ item ] };
        expect(calcularDesconto(carrinho)).toEqual(0);
    });

    it("calcularDesconto() carrinho com cupom percentual", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const cupom: Cupom = {
            tipo: "percentual",
            percentual: 1,
            validoAte: new Date(Date.now())
        }
        const carrinho: Carrinho = { itens: [ item ], cupom };
        expect(calcularDesconto(carrinho)).toEqual(25);
    });

    it("calcularDesconto() carrinho com cupom fixo menor que subtotal", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const cupom: Cupom = {
            tipo: "fixo",
            valorEmCentavos: 500,
            validoAte: new Date(Date.now())
        }
        const carrinho: Carrinho = { itens: [ item ], cupom };
        expect(calcularDesconto(carrinho)).toEqual(500);
    });

    it("calcularDesconto() carrinho com cupom fixo maior que subtotal - desconto limitado ao subtotal", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const cupom: Cupom = {
            tipo: "fixo",
            valorEmCentavos: 3000,
            validoAte: new Date(Date.now())
        }
        const carrinho: Carrinho = { itens: [ item ], cupom };
        expect(calcularDesconto(carrinho)).toEqual(2500);
    });

    it("calcularFrete() carrinho vazio frete zero", () => {
        const carrinho: Carrinho = { itens: [] };
        expect(calcularFrete(carrinho)).toEqual(0);
    });

    it("calcularFrete() carrinho subtotal < 20.000 frete 1.500", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 2500,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularFrete(carrinho)).toEqual(1500);
    });

    it("calcularFrete() carrinho subtotal = 20.000 frete gratis", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 20_000,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularFrete(carrinho)).toEqual(0);
    });

    it("calcularFrete() carrinho subtotal > 20.000 frete gratis", () => {
        const item: Item = {
            nome: "Sabão em Pó",
            precoEmCentavos: 21_000,
            quantidade: 1
        };
        const carrinho: Carrinho = { itens: [item] };
        expect(calcularFrete(carrinho)).toEqual(0);
    });

});