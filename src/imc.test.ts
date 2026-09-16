import { calcularIMC, classificarIMC, classificarIMCPorTabela } from "./imc"
import { TabelaImcResultado } from "./tabela-imc"

describe('imc', () => {
    describe('calcularIMC', () => {

        it('calcular imc - Abaixo do peso (peso: 60, altura: 1.9)', () => {
            const imc = calcularIMC(60, 1.9)
            expect(imc).toBe(16.62)
        })

        it('calcular imc - Peso normal (peso: 80, altura: 1.8)', () => {
            const imc = calcularIMC(80, 1.8)
            expect(imc).toBe(24.69)
        })

        it('calcular imc - Sobrepeso (peso: 85, altura: 1.8)', () => {
            const imc = calcularIMC(85, 1.8)
            expect(imc).toBe(26.23)
        })

        it('calcular imc - Obesidade grau I (peso: 70, altura: 1.5)', () => {
            const imc = calcularIMC(70, 1.5)
            expect(imc).toBe(31.11)
        })

        it('calcular imc - Obesidade grau II (peso: 80, altura: 1.5)', () => {
            const imc = calcularIMC(80, 1.5)
            expect(imc).toBe(35.56)
        })

        it('calcular imc - Obesidade grau III (peso: 90, altura: 1.5)', () => {
            const imc = calcularIMC(90, 1.5)
            expect(imc).toBe(40)
        })
    })

    describe('classificarIMC', () => {

        it('should return "Abaixo do peso" (peso: 60, altura: 1.9)', () => {
            const result = classificarIMC(calcularIMC(60, 1.9))
            expect(result).toBe(TabelaImcResultado.Abaixo_do_peso)
        })

        it('should return "Peso normal" (peso: 80, altura: 1.8)', () => {
            const result = classificarIMC(calcularIMC(80, 1.8))
            expect(result).toBe(TabelaImcResultado.Peso_normal)
        })

        it('should return "Sobrepeso" (peso: 85, altura: 1.8)', () => {
            const result = classificarIMC(calcularIMC(85, 1.8))
            expect(result).toBe(TabelaImcResultado.Sobrepeso)
        })

        it('should return "Obesidade grau I" (peso: 70, altura: 1.5)', () => {
            const result = classificarIMC(calcularIMC(70, 1.5))
            expect(result).toBe(TabelaImcResultado.Obesidade_grau_I)
        })

        it('should return "Obesidade grau II" (peso: 80, altura: 1.5)', () => {
            const result = classificarIMC(calcularIMC(80, 1.5))
            expect(result).toBe(TabelaImcResultado.Obesidade_grau_II)
        })

        it('should return "Obesidade grau III" (peso: 90, altura: 1.5)', () => {
            const result = classificarIMC(calcularIMC(90, 1.5))
            expect(result).toBe(TabelaImcResultado.Obesidade_grau_III)
        })
    })

    describe('classificarIMCPorTabela', () => {
        it('should return "Abaixo do peso" (peso: 60, altura: 1.9)', () => {
            expect(classificarIMCPorTabela(60, 1.9)).toBe(TabelaImcResultado.Abaixo_do_peso)
        })

        it('should return "Peso normal" (peso: 80, altura: 1.8)', () => {
            expect(classificarIMCPorTabela(80, 1.8)).toBe(TabelaImcResultado.Peso_normal)
        })

        it('should return "Sobrepeso" (peso: 85, altura: 1.8)', () => {
            expect(classificarIMCPorTabela(85, 1.8)).toBe(TabelaImcResultado.Sobrepeso)
        })

        it('should return "Obesidade grau I" (peso: 70, altura: 1.5)', () => {
            expect(classificarIMCPorTabela(70, 1.5)).toBe(TabelaImcResultado.Obesidade_grau_I)
        })

        it('should return "Obesidade grau II" (peso: 80, altura: 1.5)', () => {
            expect(classificarIMCPorTabela(80, 1.5)).toBe(TabelaImcResultado.Obesidade_grau_II)
        })

        it('should return "Obesidade grau III" (peso: 90, altura: 1.5)', () => {
            expect(classificarIMCPorTabela(90, 1.5)).toBe(TabelaImcResultado.Obesidade_grau_III)
        })

        it('should throw when combination is not in the table (peso: 50, altura: 1.5)', () => {
            expect(() =>
                classificarIMCPorTabela(50 as any, 1.5)
            ).toThrow('Combinação não encontrada na tabela: peso=50, altura=1.5')
        })
    })
})
