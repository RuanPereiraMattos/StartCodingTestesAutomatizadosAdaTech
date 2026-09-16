export type ResultadoParcelamento = {
    valorParcela: number
    totalParcelas: number
}
export function calcularParcelamento(
    valorCompra: number,
    numeroParcelas: number
): ResultadoParcelamento {
    if (numeroParcelas >= 13 && numeroParcelas <= 18){
        const valorTotalCompra = valorCompra  * 1.10;
        const result: ResultadoParcelamento = {
            valorParcela: valorTotalCompra / numeroParcelas,
            totalParcelas: numeroParcelas
        }
        return result;
    }
    if (numeroParcelas >= 9 && numeroParcelas <= 12){
        const valorTotalCompra = valorCompra  * 1.08;
        const result: ResultadoParcelamento = {
            valorParcela: valorTotalCompra / numeroParcelas,
            totalParcelas: numeroParcelas
        }
        return result;
    }
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