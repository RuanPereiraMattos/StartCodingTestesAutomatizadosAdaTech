import { describe, it, expect } from "vitest";
import { adicionarItem, Carrinho, criarCarrinho, Item } from "./carrinho";

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

});