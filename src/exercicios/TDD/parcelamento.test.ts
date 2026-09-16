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
                { numeroParcela: 13, valorParcela: 84.62 }
            ];
            numeroParcelas.forEach(({ numeroParcela, valorParcela }) => {
                const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcela);
                expect(resultado).toEqual({
                    valorParcela,
                    totalParcelas: numeroParcela
                });
            });
        });
    })
    describe('arredondamento', () => {
        it('arredonda o valor da parcela para 2 casas decimais', () => {
            const valorCompra = 1000;
            const numeroParcelas: {numeroParcela:number, valorParcela: number}[] = [
                { numeroParcela: 4,  valorParcela: 250 },
                { numeroParcela: 5,  valorParcela: 210 },
                { numeroParcela: 6,  valorParcela: 175 },
                { numeroParcela: 7,  valorParcela: 150 },
                { numeroParcela: 8,  valorParcela: 131.25 },
                { numeroParcela: 9,  valorParcela: 120 },
                { numeroParcela: 10,  valorParcela: 108 },
                { numeroParcela: 11,  valorParcela: 98.18 },
                { numeroParcela: 12, valorParcela: 90 },
                { numeroParcela: 13, valorParcela: 84.62 },
                { numeroParcela: 14, valorParcela: 78.57 },
                { numeroParcela: 15, valorParcela: 73.33 },
                { numeroParcela: 16, valorParcela: 68.75 },
                { numeroParcela: 17, valorParcela: 64.71 },
                { numeroParcela: 18, valorParcela: 61.11 }
            ]
            numeroParcelas.forEach(({ numeroParcela, valorParcela }) => {
                const resultado: ResultadoParcelamento = calcularParcelamento(valorCompra, numeroParcela);
                expect(resultado).toEqual({
                    valorParcela,
                    totalParcelas: numeroParcela
                });
            });
        });
    });
    describe('validações', () => {
        it('lança erro quando o número de parcelas for menor que 1', () => {
            const valorCompra = 1000;
            const numeroParcelas = 0;
            expect(() => calcularParcelamento(valorCompra, numeroParcelas)).toThrow("O número de parcelas não pode ser menor que 1");
        });
        it('lança erro quando o número de parcelas for maior que 18', () => {
            const valorCompra = 1000;
            const numeroParcelas = 19;
            expect(() => calcularParcelamento(valorCompra, numeroParcelas)).toThrow("O número de parcelas não pode ser maior que 18");
        });
        it('lança erro quando o número de parcelas não for inteiro', () => {
            const valorCompra = 1000;
            const numeroParcelas = 1.1;
            expect(() => calcularParcelamento(valorCompra, numeroParcelas)).toThrow("O número de parcelas tem que ser um número inteiro");
        });
        it('lança erro quando o valor da compra for zero ou negativo', () => {
            const valoresCompras : number[] = [0, -1];
            const numeroParcelas = 1;
            valoresCompras.forEach((valorCompra: number) => expect(() => calcularParcelamento(valorCompra, numeroParcelas)).toThrow("O valor da compra não pode ser zero ou negativo"));
        });
    });

    describe('Desafios Extras:', () => {
        const mock: {valorCompra: number, numeroParcelas: number, totalComJuros: number, valorParcela: number}[] = [
            { valorCompra: 1000, numeroParcelas: 1, totalComJuros: 1000, valorParcela: 1000 },
            { valorCompra: 1000, numeroParcelas: 4, totalComJuros: 1000, valorParcela: 250 },
            { valorCompra: 1000, numeroParcelas: 5, totalComJuros: 1050, valorParcela: 210 },
            { valorCompra: 1000, numeroParcelas: 8, totalComJuros: 1050, valorParcela: 131.25 },
            { valorCompra: 1000, numeroParcelas: 9, totalComJuros: 1080, valorParcela: 120 },
            { valorCompra: 1000, numeroParcelas: 12, totalComJuros: 1080, valorParcela: 90 },
            { valorCompra: 1000, numeroParcelas: 13, totalComJuros: 1100, valorParcela: 84.62 },
            { valorCompra: 1000, numeroParcelas: 18, totalComJuros: 1100, valorParcela: 61.11 },
            { valorCompra: 100, numeroParcelas: 3, totalComJuros: 100, valorParcela: 33.33 },
        ];

        describe("Reescrever todos os testes dos limites usando it.each com a tabela de exemplos da seção 6", () => {
            it.each(mock)("$numeroParcelas parcelas de R$ $valorCompra -> parcela $valorParcela", ({ valorCompra, numeroParcelas, valorParcela }) => {
                expect(calcularParcelamento(valorCompra, numeroParcelas)).toEqual({valorParcela, totalParcelas: numeroParcelas});
            });
        });

    });

})
