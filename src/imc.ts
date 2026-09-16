import { TabelaImcAlturaType, TabelaImcPesoType, TabelaImcResultado, TabelaIMC } from "./tabela-imc";

export function calcularIMC(peso: number, altura: number): number {
  const imc = peso / (altura * altura);
  return Number(imc.toFixed(2));
}

export function classificarIMC(imc: number): TabelaImcResultado {
  if (imc < 18.5) return TabelaImcResultado.Abaixo_do_peso;
  if (imc < 25)   return TabelaImcResultado.Peso_normal;
  if (imc < 30)   return TabelaImcResultado.Sobrepeso;
  if (imc < 35)   return TabelaImcResultado.Obesidade_grau_I;
  if (imc < 40)   return TabelaImcResultado.Obesidade_grau_II;
  return TabelaImcResultado.Obesidade_grau_III;
}

export function classificarIMCPorTabela(peso: TabelaImcPesoType, altura: TabelaImcAlturaType): TabelaImcResultado {
  const entrada = TabelaIMC.find(e => e.peso === peso && e.altura === altura);
  if (!entrada) throw new Error(`Combinação não encontrada na tabela: peso=${peso}, altura=${altura}`);
  return entrada.resultado;
}
