export type ResultadoParcelamento = {
    valorParcela: number
    totalParcelas: number
    parcelas?: number[]
    valorTotal?: number
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
    if (numeroParcelas >= 13 && numeroParcelas <= 18) {
        const valorTotalCompra = valorCompra  * 1.10;
        const valorParcela = parseFloat((valorTotalCompra / numeroParcelas).toFixed(2));
        const parcelas = Array(numeroParcelas).fill(valorParcela) as number[];
        const diff = parseFloat((valorTotalCompra - valorParcela * numeroParcelas).toFixed(2));
        if (diff !== 0) {
            parcelas[0] = parseFloat((parcelas[0] + diff).toFixed(2));
        }
        const result: ResultadoParcelamento = {
            valorParcela,
            totalParcelas: numeroParcelas,
            valorTotal: valorTotalCompra,
            parcelas
        }
        return result;
    }
    if (numeroParcelas >= 9 && numeroParcelas <= 12){
        const valorTotalCompra = valorCompra  * 1.08;
        const valorParcela = parseFloat((valorTotalCompra / numeroParcelas).toFixed(2));
        const parcelas = Array(numeroParcelas).fill(valorParcela) as number[];
        const diff = parseFloat((valorTotalCompra - valorParcela * numeroParcelas).toFixed(2));
        if (diff !== 0) {
            parcelas[0] = parseFloat((parcelas[0] + diff).toFixed(2));
        }
        const result: ResultadoParcelamento = {
            valorParcela,
            totalParcelas: numeroParcelas,
            valorTotal: valorTotalCompra,
            parcelas
        }
        return result;
    }
    if (numeroParcelas >= 5 && numeroParcelas <= 8){
        const valorTotalCompra = valorCompra  * 1.05;
        const valorParcela = parseFloat((valorTotalCompra / numeroParcelas).toFixed(2));
        const parcelas = Array(numeroParcelas).fill(valorParcela) as number[];
        const diff = parseFloat((valorTotalCompra - valorParcela * numeroParcelas).toFixed(2));
        if (diff !== 0) {
            parcelas[0] = parseFloat((parcelas[0] + diff).toFixed(2));
        }
        const result: ResultadoParcelamento = {
            valorParcela,
            totalParcelas: numeroParcelas,
            valorTotal: valorTotalCompra,
            parcelas
        }
        return result;
    }
    const valorParcela = parseFloat((valorCompra / numeroParcelas).toFixed(2));
    const parcelas = Array(numeroParcelas).fill(valorParcela) as number[];
    const diff = parseFloat((valorCompra - valorParcela * numeroParcelas).toFixed(2));
    if (diff !== 0) {
        parcelas[0] = parseFloat((parcelas[0] + diff).toFixed(2));
    }
    const result: ResultadoParcelamento = {
        valorParcela,
        totalParcelas: numeroParcelas,
        valorTotal: valorCompra,
        parcelas
    }
    return result;
}