import { somar, subtrair, multiplicar, dividir } from "./calculadora";

describe('calculadora', () => {

    describe('somar', () => {
        it('deve somar dois numeros (a: 1, b: 5)', () => {
            const result = somar(1, 5)
            expect(result).toBe(6)
        })

        it('deve somar dois numeros (a: 500, b: 321565)', () => {
            const result = somar(500, 321565)
            expect(result).toBe(322065)
        })
    })

    describe('subtrair', () => {
        it('deve subtrair dois numeros (a: 10, b: 8)', () => {
            const result = subtrair(10, 8)
            expect(result).toBe(2)
        })

        it('deve subtrair dois numeros (a: 5, b: 10)', () => {
            const result = subtrair(5, 10)
            expect(result).toBe(-5)
        })
    })

    describe('multiplicar', () => {
        it('deve multiplicar dois numeros (a: 3, b: 4)', () => {
            const result = multiplicar(3, 4)
            expect(result).toBe(12)
        })

        it('deve multiplicar dois numeros (a: 7, b: 0)', () => {
            const result = multiplicar(7, 0)
            expect(result).toBe(0)
        })
    })

    describe('dividir', () => {
        it('deve dividir dois numeros (a: 10, b: 2)', () => {
            const result = dividir(10, 2)
            expect(result).toBe(5)
        })

        it('deve dividir dois numeros (a: 9, b: 3)', () => {
            const result = dividir(9, 3)
            expect(result).toBe(3)
        })

        it('deve lançar erro ao dividir por zero (a: 10, b: 0)', () => {
            expect(() => dividir(10, 0)).toThrow('Divisão por zero')
        })
    })
})
