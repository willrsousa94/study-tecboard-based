import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { NavigationBar } from "./components/NavigationBar";
import { BannerText } from "./components/BannerText/bannerText";
import { Sidebar } from "./components/Sidebar";
import { HamburgerMenu } from "./components/HamburgerMenu";

const navigationItems = [
  {
    id: 1,
    name: "Hollow Knight: Silksong",
    title: "silksong",
  },
  {
    id: 2,
    name: "Clair Obscur - Expedition 33",
    title: "clair-obscur",
  },
  {
    id: 3,
    name: "Hades 2",
    title: "hades-2",
  },
];

function App() {
  const [bannerText, setBannerText] = useState("Início");

  const changeBannerText = (newText) => {
    setBannerText(newText);
  };

  return (
    <>
      <Sidebar
        navigationItems={navigationItems}
        changeBannerText={changeBannerText}
      ></Sidebar>
      <main>
        <header>
          <Banner>
            <HamburgerMenu></HamburgerMenu>
            <BannerText currentText={bannerText} />
          </Banner>
        </header>
      </main>
    </>
  );
}

export default App;
