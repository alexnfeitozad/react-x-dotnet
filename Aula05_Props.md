# Aula 05: Passando Props para um Componente 🚀

## O Problema: Componentes Estáticos
Nas primeiras aulas, nós aprendemos a criar **Componentes** (como o nosso `<Cabinet />` ou o `<Perfil />`). Porém, eles tinham um problema: eles eram rígidos. Se o componente `<Perfil />` renderizava a foto do "Alex", ele sempre iria renderizar a foto do "Alex".

Mas a grande vantagem dos componentes web modernos é a **reutilização**. Se eu crio um cartão de produto (`<CardProduto />`), eu quero poder usar a mesma "forma" de HTML/CSS para exibir dezenas de produtos diferentes na minha loja!

Como passamos o *Nome* e o *Preço* diferentes para cada cartão? A resposta são as **Props** (propriedades) no React, chamadas de **Parameters** (parâmetros) no Blazor.

---

## ⚛️ Como funciona no React (Props)
No React, um componente é literalmente uma função JavaScript. E como enviamos dados para uma função? **Através de argumentos (parâmetros).**

No React, todas as propriedades que você escreve na tag HTML são empacotadas em um único objeto JavaScript chamado `props`.

### 1. Recebendo as Props (no Componente)
Em vez de acessar `props.nome` e `props.preco`, nós costumamos **desestruturar** o objeto direto nos parênteses da função:

```jsx
// CardProduto.js
export function CardProduto({ nome, preco, emDestaque }) {
  const borda = emDestaque ? '3px solid gold' : '1px solid gray';

  return (
    <div style={{ border: borda }}>
      <h3>{nome}</h3>
      <p>R$ {preco}</p>
    </div>
  );
}
```

### 2. Enviando as Props (na Página)
Quando você usa a tag, você passa os valores como se fossem atributos normais do HTML. Se for Texto, use aspas `""`. Se for Número, Booleano (true/false) ou variável JS, use chaves `{}`.

```jsx
// Aula05Page.js
<CardProduto nome="Cadeira" preco={150.00} emDestaque={false} />
<CardProduto nome="Mesa Premium" preco={890.50} emDestaque={true} />
```

---

## 🟣 Como funciona no Blazor (Parameters)
O Blazor usa C#, uma linguagem orientada a objetos rigorosa. Portanto, um componente Blazor é uma Classe por debaixo dos panos. 

Para receber um dado de fora, você deve criar uma **Propriedade C#** comum (`{ get; set; }`) e avisar ao Blazor que ela pode ser preenchida externamente colocando o atributo `[Parameter]` em cima dela.

### 1. Recebendo os Parameters (no Componente)
```razor
<!-- CardProduto.razor -->
<div style="border: @(EmDestaque ? "3px solid gold" : "1px solid gray")">
    <h3>@Nome</h3>
    <p>R$ @Preco</p>
</div>

@code {
    [Parameter]
    public string Nome { get; set; } = ""; // Sempre dê um valor padrão

    [Parameter]
    public double Preco { get; set; }

    [Parameter]
    public bool EmDestaque { get; set; } = false;
}
```

### 2. Enviando os Parameters (na Página)
A forma de enviar dados pela tag no Razor é praticamente idêntica ao React. A principal diferença é que números e booleanos literais às vezes podem ser passados como texto com aspas e o Blazor os converte magicamente, ou podem usar `@` se for uma variável complexa.

```razor
<!-- Aula05Page.razor -->
<CardProduto Nome="Cadeira" Preco="150.00" EmDestaque="false" />
<CardProduto Nome="Mesa Premium" Preco="890.50" EmDestaque="true" />
```

---

## 🧠 Resumo de Aprendizado
1. **Dados Fluem para Baixo:** As Props/Parameters sempre fluem de um Componente Pai (a Página) para um Componente Filho (o CardProduto).
2. **Read-Only (Somente Leitura):** Um componente filho **nunca** deve tentar modificar as props que ele recebeu. Se a Página enviou o preço "150", o `CardProduto` apenas exibe "150".
3. **Poder do CSS Dinâmico:** Nós usamos uma Prop booleana (`emDestaque`) para criar lógica matemática na hora de decidir a cor da borda do nosso cartão, usando Operador Ternário (`condição ? verdadeiro : falso`). Isso mostra que o design pode mudar drasticamente baseado nos dados que chegam do banco de dados!
