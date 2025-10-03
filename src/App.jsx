import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { NavigationMenu } from "./components/NavigationMenu";
import { NavigationMenuList } from "./components/NavigationMenuList";
import { NavigationLink } from "./components/NavigationLink";

function App() {
  return (
    <main>
      <header>
        <NavigationMenu>
          <NavigationMenuList title="hollow-knight-silksong
          ">
            <NavigationLink href="/">Hollow Knight - Silksong</NavigationLink>
          </NavigationMenuList>
          <NavigationMenuList title="clair-obscur">
            <NavigationLink href="/">
              Clair Obscur - Expedition 33
            </NavigationLink>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <Banner>
        <h1>Olá</h1>
        <h2>Mundo</h2>
      </Banner>
    </main>
  );
}

export default App;
