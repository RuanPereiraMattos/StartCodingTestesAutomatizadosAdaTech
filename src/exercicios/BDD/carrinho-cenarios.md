# Cenários BDD — Carrinho

## `criarCarrinho`

**Cenário: criar carrinho vazio**
- **Dado** que nenhum item foi adicionado
- **Quando** `criarCarrinho()` é chamado
- **Então** retorna um carrinho com lista de itens vazia e sem cupom

---

## `adicionarItem`

**Cenário: adicionar item com quantidade válida**
- **Dado** um carrinho vazio
- **Quando** `adicionarItem` é chamado com quantidade 1
- **Então** o item aparece na lista de itens do carrinho

**Cenário: adicionar múltiplos itens**
- **Dado** um carrinho com um item
- **Quando** `adicionarItem` é chamado com um segundo item
- **Então** o carrinho contém os dois itens

**Cenário: rejeitar item com quantidade zero**
- **Dado** um carrinho vazio
- **Quando** `adicionarItem` é chamado com quantidade `0`
- **Então** lança erro `'Quantidade deve ser maior que zero'`

**Cenário: rejeitar item com quantidade negativa**
- **Dado** um carrinho vazio
- **Quando** `adicionarItem` é chamado com quantidade `-1`
- **Então** lança erro `'Quantidade deve ser maior que zero'`

---

## `aplicarCupom`

**Cenário: aplicar cupom percentual sem validade**
- **Dado** u"m carrinho com iten"s
- **Quando** `aplicarCupom` é chamado com cupom `percentual` sem `validoAte`
- **Então** o cupom é associado ao carrinho

**Cenário: aplicar cupom fixo sem validade**
- **Dado** um carrinho com itens
- **Quando** `aplicarCupom` é chamado com cupom `fixo` sem `validoAte`
- **Então** o cupom é associado ao carrinho

**Cenário: aplicar cupom dentro da validade**
- **Dado** um carrinho com itens e data atual `hoje`
- **Quando** `aplicarCupom` é chamado com `validoAte` = `amanhã`
- **Então** o cupom é associado ao carrinho

**Cenário: rejeitar cupom expirado**
- **Dado** um carrinho com itens e data atual `hoje`
- **Quando** `aplicarCupom` é chamado com `validoAte` = `ontem`
- **Então** lança erro `'Cupom expirado'`

---

## `calcularSubtotal`

**Cenário: subtotal de carrinho vazio**
- **Dado** um carrinho vazio
- **Quando** `calcularSubtotal` é chamado
- **Então** retorna `0`

**Cenário: subtotal com um item**
- **Dado** um carrinho com 1 item de preço `1000` e quantidade `2`
- **Quando** `calcularSubtotal` é chamado
- **Então** retorna `2000`

**Cenário: subtotal com múltiplos itens**
- **Dado** um carrinho com item A (`preço 500, qtd 3`) e item B (`preço 1000, qtd 2`)
- **Quando** `calcularSubtotal` é chamado
- **Então** retorna `3500`

---

## `calcularDesconto`

**Cenário: sem cupom aplicado**
- **Dado** um carrinho sem cupom
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `0`

**Cenário: cupom percentual**
- **Dado** um carrinho com subtotal `10000` e cupom `10%`
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `1000`

**Cenário: cupom fixo menor que o subtotal**
- **Dado** um carrinho com subtotal `10000` e cupom fixo de `2000`
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `2000`

**Cenário: cupom fixo maior que o subtotal (desconto limitado ao subtotal)**
- **Dado** um carrinho com subtotal `1000` e cupom fixo de `5000`
- **Quando** `calcularDesconto` é chamado
- **Então** retorna `1000` (não pode ser maior que o subtotal)

---

## `calcularFrete`

**Cenário: carrinho vazio não gera frete**
- **Dado** um carrinho vazio
- **Quando** `calcularFrete` é chamado
- **Então** retorna `0`

**Cenário: valor líquido abaixo do mínimo para frete grátis**
- **Dado** um carrinho com subtotal de `19999` e sem cupom
- **Quando** `calcularFrete` é chamado
- **Então** retorna `1500`

**Cenário: valor líquido exatamente no mínimo para frete grátis**
- **Dado** um carrinho com subtotal de `20000` e sem cupom
- **Quando** `calcularFrete` é chamado
- **Então** retorna `0`

**Cenário: valor líquido acima do mínimo para frete grátis**
- **Dado** um carrinho com subtotal de `25000` e sem cupom
- **Quando** `calcularFrete` é chamado
- **Então** retorna `0`

**Cenário: desconto faz o valor cair abaixo do mínimo para frete grátis**
- **Dado** um carrinho com subtotal `21000` e cupom fixo de `1001`
- **Quando** `calcularFrete` é chamado
- **Então** retorna `1500` (valor líquido = `19999`)

---

## `calcularTotal`

**Cenário: total sem desconto e com frete**
- **Dado** um carrinho com subtotal `10000` e sem cupom
- **Quando** `calcularTotal` é chamado
- **Então** retorna `11500` (subtotal + frete)

**Cenário: total com cupom e com frete**
- **Dado** um carrinho com subtotal `10000` e cupom de `10%`
- **Quando** `calcularTotal` é chamado
- **Então** retorna `10500` (`9000` líquido + `1500` frete)

**Cenário: total com frete grátis**
- **Dado** um carrinho com subtotal `20000` e sem cupom
- **Quando** `calcularTotal` é chamado
- **Então** retorna `20000` (sem frete)

**Cenário: total de carrinho vazio**
- **Dado** um carrinho vazio
- **Quando** `calcularTotal` é chamado
- **Então** retorna `0`
