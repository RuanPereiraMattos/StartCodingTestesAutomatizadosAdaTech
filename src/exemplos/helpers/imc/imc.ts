export function calcularIMC (peso: number, altura: number): number {
  const imc = (peso / (altura * altura)).toFixed(2)
  return Number(imc)
}

const indice = {
  abaixo_do_peso: 18.5
}

export function classificarIMC (imc: number) {
  if(imc < indice.abaixo_do_peso) return 'Abaixo do peso'
}