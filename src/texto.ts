export function inverterTexto(texto: string): string {
  return texto.split("").reverse().join("");
}

export function contarVogais(texto: string): number {
  return texto.split("").filter((letra) => "aeiouAEIOU".includes(letra)).length;
}

export function capitalizar(texto: string): string {
  if (texto === "") return "";
  return texto[0].toUpperCase() + texto.slice(1).toLowerCase();
}

export function ehPalindromo(texto: string): boolean {
  const limpo = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
  return limpo === limpo.split("").reverse().join("");
}
