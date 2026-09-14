# Aula 07: Renderizando Listas 📋

Uma das tarefas mais comuns no desenvolvimento de software moderno é pegar uma lista de informações (como um Array de objetos vindo de um Banco de Dados ou uma API) e transformá-la em elementos visuais na tela.

---

## ⚛️ Como funciona no React (JavaScript `.map`)

O JSX é apenas JavaScript disfarçado de HTML. Como o HTML não tem comandos nativos de repetição como o `foreach`, nós usamos funções clássicas de array do JavaScript. A mais usada é o **`map()`**.

A função `map()` percorre cada item da sua array e "transforma" aquele item em um pedaço de HTML.

### O Código React (`ListaTarefas.js`):
```jsx
export function ListaTarefas() {
  const tarefas = [
    { id: 1, texto: 'Estudar React', concluida: true },
    { id: 2, texto: 'Estudar Blazor', concluida: false }
  ];

  return (
    <ul>
      {/* Usando map() para transformar a array em tags <li> */}
      {tarefas.map(tarefa => (
        <li key={tarefa.id}>
          {tarefa.texto}
        </li>
      ))}
    </ul>
  );
}
```

**⚠️ A Regra de Ouro do React (Prop `key`):**
Sempre que você usar o `map()` para gerar uma lista de elementos, o React exige que você coloque o atributo `key` no elemento pai de cada item (no caso, a tag `<li>`). Essa `key` deve ser um valor único (geralmente o ID do banco de dados). O React usa isso por baixo dos panos para saber exatamente qual item foi deletado, movido ou alterado, sem precisar redesenhar a lista inteira!

---

## 🟣 Como funciona no Blazor (C# `@foreach`)

No Blazor, nós temos o poder total do C# no meio do HTML. Portanto, para repetir um bloco de código, nós literalmente usamos o laço de repetição **`@foreach`**.

### O Código Blazor (`ListaTarefas.razor`):
```razor
<ul>
    <!-- Usando o laço foreach do C# direto no HTML -->
    @foreach (var tarefa in Tarefas)
    {
        <li @key="tarefa.Id">
            @tarefa.Texto
        </li>
    }
</ul>

@code {
    private List<Tarefa> Tarefas = new()
    {
        new Tarefa { Id = 1, Texto = "Estudar React", Concluida = true },
        new Tarefa { Id = 2, Texto = "Estudar Blazor", Concluida = false }
    };
    
    // ... classe Tarefa omitida para brevidade
}
```

**A Diretiva `@key` no Blazor:**
Ao contrário do React, se você esquecer a chave, o Blazor não vai estourar um erro gigantesco no console. Porém, é uma **excelente prática** colocar `@key="variavel.Id"` pelo exato mesmo motivo do React: performance ao atualizar listas!

---

## 🧠 Resumo de Aprendizado
1. **Ferramenta de Repetição:** No React usamos `array.map(item => <tag>)`. No Blazor usamos `@foreach(var item in array) { <tag> }`.
2. **Chaves de Identificação:** Ambos os frameworks recomendam (e o React obriga) o uso de chaves únicas (`key=` ou `@key=`) em listas geradas dinamicamente.
3. **Múltiplos Retornos:** Dentro do seu `map` ou `foreach`, certifique-se sempre de que o bloco retornado está envelopado em apenas um elemento pai (como a `<li>`), respeitando a regra de ouro do JSX e do Razor de "um pai por retorno".
