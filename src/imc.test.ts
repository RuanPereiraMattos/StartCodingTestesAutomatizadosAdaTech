import { calcularIMC, classificarIMC } from "./imc"

describe('imc', () => {
    describe('calcularIMC', () => {
        it('calcular imc', () => {
            //arrange
            const altura = 1.80
            const peso = 80

            //act
            const imc = calcularIMC(peso, altura)

            //assert
            expect(imc).toBe(24.69)
        })

         it('calcular imc', () => {
            //arrange
            const altura = 1.50
            const peso = 70

            //act
            const imc = calcularIMC(peso, altura)

            //assert
            expect(imc).toBe(31.11)
        })
    })

    describe('classificarIMC', () => {
        it('should return "Abaixo do peso"', () => {
            //arrange
            const altura = 2
            const peso = 70
            const imc = calcularIMC(2, 70)

            //act
            const result = classificarIMC(imc)
            console.log(result)
            
            //assert
            expect(result).toBe('Abaixo do peso')

        })
    })
    
})