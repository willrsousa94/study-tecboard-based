import { useState } from "react";
import "./App.css";

function FormWithButton() {
  return (
    <form className="formTest">
      <h2>Formulário de teste</h2>
      <fieldset>
        <label htmlFor="">Qual é o seu nome?</label>
        <input type="text" id="nome" />
        <label htmlFor="">Qual é sua idade?</label>
        <input type="text" id="idade" />
        <button>Enviar</button>
        <button>Apagar</button>
      </fieldset>
    </form>
  );
}

function App() {
  return (
    <main>
      <header>
        <h1>Olá</h1>
        <h2>Mundo</h2>
      </header>
      <section>
        <FormWithButton />
      </section>
    </main>
  );
}

export default App;
