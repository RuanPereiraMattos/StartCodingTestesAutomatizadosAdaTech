export type ResultadoParcelamento = {
    valorParcela: number
    totalParcelas: number
    parcelas?: number[]
    valorTotal?: number
}

function obterFatorJuros(numeroParcelas: number): number {
    if (numeroParcelas >= 13) return 1.10;
    if (numeroParcelas >= 9) return 1.08;
    if (numeroParcelas >= 5) return 1.05;
    else return 1.0;
}

export function calcularParcelamento(
    valorCompra: number,
    numeroParcelas: number
): ResultadoParcelamento {
    if (valorCompra <= 0)
        throw new Error("O valor da compra não pode ser zero ou negativo");
    if (!Number.isInteger(numeroParcelas))
        throw new Error("O número de parcelas tem que ser um número inteiro");
    if (numeroParcelas < 1)
        throw new Error("O número de parcelas não pode ser menor que 1");
    if (numeroParcelas > 18)
        throw new Error("O número de parcelas não pode ser maior que 18");

    const fator = obterFatorJuros(numeroParcelas);
    const valorTotalCompra = valorCompra * fator;
    const valorParcela = Number.parseFloat((valorTotalCompra / numeroParcelas).toFixed(2));
    const parcelas = new Array(numeroParcelas).fill(valorParcela) as number[];
    const diff = Number.parseFloat((valorTotalCompra - valorParcela * numeroParcelas).toFixed(2));
    if (diff !== 0)
        parcelas[0] = Number.parseFloat((parcelas[0] + diff).toFixed(2));
    return {
        valorParcela,
        totalParcelas: numeroParcelas,
        valorTotal: valorTotalCompra,
        parcelas
    }
}