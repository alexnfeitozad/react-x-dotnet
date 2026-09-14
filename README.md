# Curso Prático: React vs C# (Blazor) 🚀

Este repositório é um caderno de estudos interativo e um guia prático comparando os conceitos de componentização do **React (JavaScript)** com o **Blazor (C#)**.

A estrutura do projeto adota uma **Arquitetura Fractal** (padrão de Laboratório), onde cada aula é isolada em sua própria pasta, contendo seus respectivos componentes e páginas.

## Projetos
- `react-basico`: Projeto React puro criado com `create-react-app`.
- `blazor-app`: Projeto C# criado com Blazor WebAssembly.

---

## 📚 Índice de Aulas

### 01. Seu Primeiro Componente
Na web moderna, interfaces não são construídas como uma página HTML gigante. Usamos **Componentes** (pedaços isolados, reutilizáveis e independentes).
- **React**: Componentes são Funções JavaScript que retornam JSX.
- **Blazor**: Componentes são arquivos `.razor` que o compilador transforma em Classes C#.
- **Prática**: Construímos um Armário (`Cabinet`) composto por Portas (`Door`), Prateleiras (`Shelf`) e Dobradiças (`Hinge`), provando o poder do *Encapsulamento*.

### 02. Importando e Exportando Componentes
Para organizar a casa, não deixamos todos os componentes em um único arquivo.
- **React**: Usamos o padrão de Módulos do JavaScript (`export function...` e `import { Componente } from './caminho'`).
- **Blazor**: Funciona através de **Namespaces** (o nome da pasta). Usamos a diretiva `@using`.
- **O Super Poder do Blazor**: O arquivo `_Imports.razor` permite importar namespaces globalmente para o projeto inteiro de uma só vez.

### 03. Escrevendo Tags com JSX (vs Razor)
Historicamente HTML e JS eram separados. Hoje, a lógica visual é escrita junto.
- **React (JSX)**: Você escreve um arquivo JavaScript e injeta HTML dentro. Possui 3 regras de ouro: Retornar apenas um elemento pai, fechar todas as tags (ex: `<br />`) e usar `camelCase` (ex: `className`).
- **Blazor (Razor)**: Você escreve um arquivo essencialmente HTML e usa o símbolo `@` para injetar C#. As regras do HTML comum permanecem (você pode usar `class` normalmente).

### 04. JavaScript (e C#) entre Chaves
A força de um framework web é poder renderizar dados dinâmicos no meio da tela.
- **React**: Usa chaves `{}`. Ex: `<img src={usuario.avatar} />` ou `<h3>{usuario.nome}</h3>`.
- **Blazor**: Usa a arroba `@`. Ex: `<img src="@Usuario.Avatar" />` ou `<h3>@Usuario.Nome</h3>`.
- **Cuidado no Razor**: O símbolo `@` é reservado. Para digitar um "arroba" como texto normal no HTML, é necessário usar duplo arroba: `@@`.

### 05. Passando Props para um Componente
Até a Aula 04, os nossos componentes eram estáticos. As **Props** (propriedades / parâmetros) resolvem isso, permitindo passar informações "de fora para dentro" como se fossem configurações daquele componente.
- **React**: As props chegam como um objeto nos argumentos da função (geralmente desestruturadas). Ex: `export function CardProduto({ nome, preco, emDestaque })`.
- **Blazor**: As props são propriedades da Classe C# marcadas com o atributo `[Parameter]`. Ex: `[Parameter] public string Nome { get; set; }`.
- **Prática**: Criamos uma única fábrica de `<CardProduto />` e, na página principal, renderizamos três produtos totalmente diferentes apenas mudando as props que foram passadas para eles. Um deles, usando a prop boleana `emDestaque`, até mudou de cor e ganhou uma etiqueta!

### 06. Eventos e Estado (State)
Dar vida à interface significa escutar o usuário e reagir.
- **Eventos de Clique**: No React usamos `onClick={funcao}`, enquanto no Blazor usamos `@onclick="Metodo"`.
- **Estado (State)**: É a "memória" que causa uma re-renderização visual.
  - **React**: Usa o Hook `useState` para criar um estado rastreável e uma função modificadora (`const [aberta, setAberta] = useState(false)`).
  - **Blazor**: Usa variáveis C# comuns (`private bool Aberta = false;`). O motor do WebAssembly escuta os eventos e atualiza a tela automaticamente!
- **Prática**: Criamos uma `<SmartDoor />` (Porta Inteligente). Ao clicar na maçaneta, a variável de estado muda, o CSS reage abrindo a porta com um efeito 3D e revela um texto interno.

### 07. Renderizando Listas
Mapear um Array de dados para transformar em elementos HTML.
- **React**: Usa a função `array.map()` nativa do Javascript. É obrigatório passar a prop especial `key` no elemento iterado.
- **Blazor**: Usa a estrutura de repetição C# `@foreach(var item in Lista)`. A diretiva `@key` é opcional, mas recomendada por questões de performance.
- **Prática**: Construímos um componente `<ListaTarefas />` que renderiza ícones dinâmicos e risca o texto baseando-se no booleano `concluida`.

---

## 💡 Curiosidade: A Magia por trás do Blazor e React

### Por que escrevemos HTML e CSS dentro do JavaScript/C#?
Se você olhar o código de um componente de ambas as linguagens, a estrutura é idêntica. O que causa "estranheza" no começo é a extensão do arquivo:
No React, salvamos como `.js` (JSX), dando a sensação de *"estou escrevendo HTML no meu JavaScript"*. No Blazor, a extensão `.razor` deixa claro que o arquivo é um liquidificador de C# com HTML.

### Como o C# gera HTML no navegador se o Chrome só entende JavaScript?
A mágica tem um nome: **WebAssembly (WASM)**.

1. A Microsoft pegou o motor gigantesco do `.NET` e compilou para o formato de baixo nível WebAssembly.
2. Quando você abre um site feito em Blazor, o seu navegador (Chrome/Edge) faz o download de um "Mini .NET" e roda ele ali mesmo, direto na memória.
3. O compilador transforma o seu arquivo `.razor` em uma `.dll` normal.
4. O Mini .NET roda a sua `.dll` dentro do navegador e comanda as alterações na tela, roubando o emprego do JavaScript!
