export type ResultadoParcelamento = {
    valorParcela: number
    totalParcelas: number
}
export function calcularParcelamento(
    valorCompra: number,
    numeroParcelas: number
): ResultadoParcelamento {
    if (numeroParcelas < 1)
        throw new Error("O número de parcelas não pode ser menor que 1");
    if (numeroParcelas >= 13 && numeroParcelas <= 18) {
        const valorTotalCompra = valorCompra  * 1.10;
        const result: ResultadoParcelamento = {
            valorParcela: parseFloat((valorTotalCompra / numeroParcelas).toFixed(2)),
            totalParcelas: numeroParcelas
        }
        return result;
    }
    if (numeroParcelas >= 9 && numeroParcelas <= 12){
        const valorTotalCompra = valorCompra  * 1.08;
        const result: ResultadoParcelamento = {
            valorParcela: parseFloat((valorTotalCompra / numeroParcelas).toFixed(2)),
            totalParcelas: numeroParcelas
        }
        return result;
    }
    if (numeroParcelas >= 5 && numeroParcelas <= 8){
        const valorTotalCompra = valorCompra  * 1.05;
        const result: ResultadoParcelamento = {
            valorParcela: parseFloat((valorTotalCompra / numeroParcelas).toFixed(2)),
            totalParcelas: numeroParcelas
        }
        return result;
    }
    const result: ResultadoParcelamento = {
        valorParcela: parseFloat((valorCompra / numeroParcelas).toFixed(2)),
        totalParcelas: numeroParcelas
    }
    return result;
}