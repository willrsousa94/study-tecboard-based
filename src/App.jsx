import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { NavigationBar } from "./components/NavigationBar";

function App() {
  return (
    <main>
      <header>
        <NavigationBar />
      </header>
      <Banner>
        <h1>Olá</h1>
        <h2>Mundo</h2>
      </Banner>
    </main>
  );
}

export default App;
