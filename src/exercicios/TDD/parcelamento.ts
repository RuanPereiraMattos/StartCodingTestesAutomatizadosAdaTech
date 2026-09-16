export type ResultadoParcelamento = {
    valorParcela: number
    totalParcelas: number
}
export function calcularParcelamento(
    valorCompra: number,
    numeroParcelas: number
): ResultadoParcelamento {
    const result: ResultadoParcelamento = {
        valorParcela: valorCompra / numeroParcelas,
        totalParcelas: numeroParcelas
    }
    return result;
}