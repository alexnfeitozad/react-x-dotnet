# Aula 08: Mantendo seus Componentes Puros 🧪

O conceito de **Componente Puro** tem origem em um princípio da Ciência da Computação chamado *Funções Puras*. 

Uma Função Pura (ou Componente Puro) tem duas características rígidas:
1. **Ele cuida da própria vida:** Ele não altera nenhuma variável, estado ou objeto que exista antes dele ser chamado.
2. **Mesma Entrada, Mesma Saída:** Dado o mesmo input (Props/Parâmetros), ele deve retornar *exatamente* o mesmo HTML sempre.

---

## ⚛️ O Efeito StrictMode no React

No React, os componentes são funções que devem apenas retornar um JSX, e **jamais modificar dados globais no meio do caminho**. O processo de renderização deve ser uma "leitura", não uma "escrita".

### O Crime (Impuro ❌):
```jsx
let contador = 0; // Variável externa (Global)

export function CopoImpuro() {
  // CRIME: Alterar uma variável externa no meio do render
  contador = contador + 1;
  return <h4>Copo #{contador}</h4>;
}
```
Se você renderizar três `<CopoImpuro />`, você esperaria ver os números 1, 2 e 3, certo? 
Mas, se o seu ambiente de desenvolvimento React estiver com o `<React.StrictMode>` ligado, você verá **2, 4 e 6**!

O React propositalmente chama a sua função duas vezes super rápido, para garantir que se o seu componente fosse impuro, o bug ficaria tão bizarro e escancarado na sua tela que você o corrigiria imediatamente. O React é rigoroso com arquitetura.

---

## 🟣 O Perigo Constante no Blazor

O Blazor não possui um "StrictMode" que dobra as execuções, o que pode dar a falsa sensação de segurança inicial. Se você cometer o mesmo crime no Blazor:

### O Crime (Impuro ❌):
```razor
@if (true)
{
    ContadorGlobal++; // CRIME: Mutação no meio do ciclo de vida do HTML
    <h4>Copo #@ContadorGlobal</h4>
}

@code {
    private static int ContadorGlobal = 0; // Variável Estática
}
```
Se você colocar três copos na tela, eles vão renderizar 1, 2 e 3 perfeitamente na primeira carga. 
Porém, se você navegar para outra página da aplicação e voltar para essa, o Blazor vai desenhar 4, 5 e 6! A variável externa foi corrompida. Se fosse um carrinho de compras de um site real, você teria dobrado o preço dos produtos do cliente sem ele clicar em nada.

---

## A Solução Elegante (Puro ✅)

A solução é incrivelmente simples e você já a aprendeu na Aula 05: **Envie a variável como uma Prop!**

Deixe o gerenciamento do estado (`Contador` ou `Convidado`) a cargo da Página principal, e apenas passe a variável "de fora para dentro" (Read-Only) para os filhos. O filho apenas "Lê e Desenha", se tornando um Componente Puro à prova de bugs.

### O Correto:
```jsx
// REACT
export function CopoPuro({ convidado }) {
  return <h4>Copo #{convidado}</h4>;
}
```

```razor
<!-- BLAZOR -->
<h4>Copo #@Convidado</h4>

@code {
    [Parameter] public int Convidado { get; set; }
}
```
