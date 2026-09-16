import { describe, it } from 'vitest';
import { calcularParcelamento, ResultadoParcelamento } from './parcelamento';

describe('calcularParcelamento', () => {
    describe('sem juros (1x a 4x)', () => {
        it('retorna o valor total em parcela única quando for 1x', () => {
            const valorCompra = 1000;
            const numeroParcelas = 1;
            const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcelas);
            expect(resultado).toEqual({
                valorParcela: valorCompra,
                totalParcelas: numeroParcelas
            });
        });
        it('divide o valor sem juros quando for 4x', () => {
            const valorCompra = 1000;
            const numeroParcelas = 4;
            const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcelas);
            expect(resultado).toEqual({
                valorParcela: 250,
                totalParcelas: numeroParcelas
            });
        });
    });
    describe('com juros', () => {
        it('aplica 5% sobre o total quando for de 5x a 8x', () => {
            const valorCompra = 1000;
            const numeroParcelas = 8;
            const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcelas);
            expect(resultado).toEqual({
                valorParcela: 131.25,
                totalParcelas: numeroParcelas
            });
        });
        it('aplica 8% sobre o total quando for de 9x a 12x', () => {
            const valorCompra = 1000;
            const numeroParcelas = 9;
            const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcelas);
            expect(resultado).toEqual({
                valorParcela: 120,
                totalParcelas: numeroParcelas
            });
        });
        it('aplica 10% sobre o total quando for de 13x a 18x', () => {
            const valorCompra = 1000;
            const numeroParcelas = 16;
            const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcelas);
            expect(resultado).toEqual({
                valorParcela: 68.75,
                totalParcelas: numeroParcelas
            });
        })
        it('aplica a faixa correta nos limites (4x, 5x, 8x, 9x, 12x, 13x)', () => {
            const valorCompra = 1000;
            const numeroParcelas: {numeroParcela:number, valorParcela: number}[] = [
                { numeroParcela: 4,  valorParcela: 250 },
                { numeroParcela: 5,  valorParcela: 210 },
                { numeroParcela: 8,  valorParcela: 131.25 },
                { numeroParcela: 9,  valorParcela: 120 },
                { numeroParcela: 12, valorParcela: 90 },
                { numeroParcela: 13, valorParcela: 84.61538461538461 }
            ];
            numeroParcelas.forEach(({ numeroParcela, valorParcela }) => {
                const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcela);
                expect(resultado).toEqual({
                    valorParcela,
                    totalParcelas: numeroParcela
                });
            });
        })
    })
    describe.skip('arredondamento', () => {
        it('arredonda o valor da parcela para 2 casas decimais')
    })
    describe.skip('validações', () => {
        it('lança erro quando o número de parcelas for menor que 1')
        it('lança erro quando o número de parcelas for maior que 18')
        it('lança erro quando o número de parcelas não for inteiro')
        it('lança erro quando o valor da compra for zero ou negativo')
    })
})
