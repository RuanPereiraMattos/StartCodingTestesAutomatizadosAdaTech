export type ResultadoParcelamento = {
    valorParcela: number
    totalParcelas: number
}
export function calcularParcelamento(
    valorCompra: number,
    numeroParcelas: number
): ResultadoParcelamento {
    if (numeroParcelas >= 5 && numeroParcelas <= 8){
        const valorTotalCompra = valorCompra  * 1.05;
        const result: ResultadoParcelamento = {
            valorParcela: valorTotalCompra / numeroParcelas,
            totalParcelas: numeroParcelas
        }
        return result;
    }
    const result: ResultadoParcelamento = {
        valorParcela: valorCompra / numeroParcelas,
        totalParcelas: numeroParcelas
    }
    return result;
}