# Aula 06: Eventos e Estado (State) 🖱️🚪

Na Aula 05, nós enviamos informações para dentro do componente (Props). Mas e se quisermos que o componente **reaja** às ações do usuário e mude o que está na tela? 

Para isso, precisamos de dois superpoderes: **Eventos** (ouvir o clique do mouse, a digitação do teclado) e **Estado** (memória do componente que, ao ser alterada, atualiza a interface gráfica).

---

## ⚛️ Como funciona no React

No React, os eventos são passados como props normais, porém começando com `on` e usando `camelCase` (ex: `onClick`, `onMouseEnter`). 

E para o Estado, como as variáveis comuns do JavaScript **não** atualizam a tela quando mudam de valor, nós usamos um **Hook** especial chamado `useState`.

### O Código React (`SmartDoor.js`):
```jsx
import { useState } from 'react';

export function SmartDoor() {
  // 1. Criando o Estado:
  // 'aberta' é a variável que guarda o valor atual.
  // 'setAberta' é a função obrigatória para alterar o valor e forçar o React a redesenhar a tela.
  const [aberta, setAberta] = useState(false);

  // 2. A função que o evento vai chamar:
  function alternarPorta() {
    setAberta(!aberta); // Inverte o valor (se true vira false, e vice-versa)
  }

  return (
    <div>
      {/* 3. Escutando o evento: onClick={...} */}
      <div className="macaneta" onClick={alternarPorta}></div>
      
      {/* Exibindo conteúdo com base no estado */}
      {aberta && <p>Narnia! 🦁</p>}
    </div>
  );
}
```

---

## 🟣 Como funciona no Blazor

O Blazor brilha pela simplicidade aqui. Os eventos usam o prefixo `@on` (ex: `@onclick`, `@onmouseover`). 
Para o Estado, **você não precisa de nenhum Hook complexo!** O Blazor observa automaticamente as variáveis comuns da sua classe (`private bool Aberta = false;`). Quando um evento (como um clique) acontece, ele re-renderiza o HTML sozinho se perceber que a variável mudou.

### O Código Blazor (`SmartDoor.razor`):
```razor
<div>
    <!-- 1. Escutando o evento com @onclick -->
    <div class="macaneta" @onclick="AlternarPorta"></div>

    <!-- Exibindo conteúdo com base na variável C# -->
    @if (Aberta)
    {
        <p>Narnia! 🦁</p>
    }
</div>

@code {
    // 2. O Estado é apenas uma variável comum!
    private bool Aberta = false;

    // 3. O método que altera o estado:
    private void AlternarPorta()
    {
        Aberta = !Aberta;
    }
}
```

---

## 🧠 Resumo de Aprendizado
1. **Nomeclatura:** `onClick={...}` (React) vs `@onclick="..."` (Blazor). Note que no Blazor colocamos o nome do método entre aspas, mas o compilador entende que é uma referência à função C#, não texto!
2. **Reatividade:** 
   - No **React**, nunca faça `aberta = true;`, pois o React não vai ficar sabendo. Sempre use `setAberta(true);`.
   - No **Blazor**, você pode alterar a variável da forma clássica (`Aberta = true;`), e a infraestrutura mágica do WebAssembly cuida de atualizar o DOM.
3. **Poder Visual:** Juntamos as variáveis de estado com CSS inline para gerar efeitos 3D incríves (o `transform: rotateY` da porta)!
