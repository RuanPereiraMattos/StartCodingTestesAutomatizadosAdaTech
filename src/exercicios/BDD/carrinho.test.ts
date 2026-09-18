import { describe, it, expect } from "vitest";
import { Carrinho, criarCarrinho } from "./carrinho";

describe("Carrinho", () => {
    
    it("criarCarrinho()", () => {
        const carrinho: Carrinho = criarCarrinho();
        expect(carrinho).toEqual({ itens: [] });
    });

});