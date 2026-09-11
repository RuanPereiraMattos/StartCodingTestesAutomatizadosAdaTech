import { somar, subtrair } from "./calculadora";

describe('calculadora', () => {

    describe('somar', () => {
       it('deve somar dois numeros', () => {
        // arrange
        const a = 1
        const b = 5

        // act
        const result = somar(a,b);

        // assert
        expect(result).toBe(6)
        });

        it('deve somar outros dois numeros', () => {
             // arrange
        const a = 500
        const b = 321565

        // act
        const result = somar(a,b);

        // assert
        expect(result).toBe(322065)
        })

    })

    describe('subtrair', () => {
        it('deve subtrair dois numeros', () => {
            //arrange
            const a = 10
            const b = 8
            
            //act
            const result = subtrair(a,b)

            //assert
            expect(result).toBe(2) 
        })
       
    })
})
