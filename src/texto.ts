export function inverterTexto(texto: string): string {
  return texto.split("").reverse().join("");
}

export function contarVogais(texto: string): number {
  const normalize = texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  return normalize.split("").filter((letra) => "aeiouAEIOU".includes(letra)).length;
}

export function capitalize(texto: string): string {
  if (texto === "") return "";
  return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
}

export function isPalindromo(texto: string): boolean {
  const limpo = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpo === limpo.split("").reverse().join("");
}