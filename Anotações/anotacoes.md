# Anotações

no react, componentes são FUNÇÕES

__props__ é um _OBJETO_
o nome props é dado por uma convenção geral
props.children

Quando a gente quer o valor dinâmico, por ser JSX, pra acessar o valor dinâmico, coloca entre chaves
por exemplo: 

```js 
{props.children}
```

Exemplo de função

```jsx
function FormularioDeEvento() {
  return (
    <form className="form-evento">
      <TituloFormulario>Preencha para criar um evento:</TituloFormulario>
      <fieldset>
        <label htmlFor="nome">Qual é o nome do evento?</label>
        <input type="text" id="nome" placeholder="Summer dev hits" />
      </fieldset>
    </form>
  );
}
```

Um macete que a gente pode fazer é desconstruir usando uma funcionalidade do próprio _JavaScript_ , pra usar direto o children ao invés de ficar usando props a todo momento, por exemplo:

```jsx
function CampoDeFormulario({children}){
  return (
    <Fieldset>
    {children}
    </Fieldset>
  )
}
```

Para um input, para pegar cada parâmetro um por um, seria muito complicado, imaginando um input que receba diversos parâmetros (type, id, placeholder, class e etc)

A gente pode usar um operador que espalha as propriedades usando ...props, por exemplo:

```jsx

function CampoDeEntrada({}){
  return <input {...props} />
}

<CampoDeEntrada 
  type="text" 
  id="nome" 
  placeholder="Summer dev hits" 
/>
```

Uma boa prática também é criar um arquivo por componente, para o código ficar mais limpo

## Boas práticas:

Ter uma pasta Component e separar cada função de Component em arquivos específicos, para literalmente separar as responsabilidades de cada arquivo e seus CSS(não é uma boa prática deixar os componentes criados dentro do arquivo App, sendo que a responsabilidade do App é só renderizar o formato da aplicação)

Hook (gancho) são funções especiais.
Para a gente atualizar o estado de uma página React, podemos usar o useState(), uma função especial do React.

exemplo de código:
```jsx
const [events, setEvents] = useState([
    {
      cover: `https://raw.githubusercontent.com/viniciosneves/tecboard-assets/refs/heads/main/imagem_1.png`,
      theme: themes[0],
      date: new Date(),
      title: "Mulheres no Front",
    },
  ]);

  function addEvent(event) {
    // events.push(event);
    //console.log("eventos => ", events);

    setEvents([...events, event]);
  }
```

O React tem o conceito de imutabilidade (pesquisar depois o conceito)

# Hooks:

### [useState()](https://react.dev/reference/react/useState) 
Controla o estado da funcionalidade/página

### [useRef()](https://react.dev/reference/react/useRef) 
Permite referenciar um valor que não precisa estar sempre renderizado

### [useEffect()](https://react.dev/reference/react/useEffect) 

Sincroniza um componente com um sistema externo

# Códigos de Exemplo dos Hooks

## useState() 

```jsx
  const [mainContent, setMainContent] = useState({
    title: "Início",
    text: `Texto inicial que será mudado ao acessar um jogo`,
    src: "/wizarding-world-portrait.png",
  });
```

## useRef()

Talvez não precise, já que é apenas uma linha de código XD

## useEffect()

```jsx
useEffect(() => {
  fetch('url aqui')
  .then(response => response.json())
  .then(data => {
    console.log('test')
  })

})
```

# Json-server 
Interessante pra testar requisições com um servidor de mentira

Preciso do json-server instalado e de um arquivo json (db.json) em uma pasta com uma estrutura json e rodar um comando`

Exemplo: 

```json-server --watch db.json -p 8080```

# PropDrilling

Processo de passar dados de um componente pai para componentes filhos em diferentes níveis da árvore de componentes.

Isso faz com que sejam passado props para o componente mesmo que ele não use, já que ele vai repassar para os filhos, isso não parece ser muito correto, principalmente pensando no conceito de _*DRY (Don't Repeat Yourself)*_

Solução seria criar um componente que recebe todos os ToDos? Igual o do icons...

# Context API

