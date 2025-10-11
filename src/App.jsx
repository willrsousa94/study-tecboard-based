import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { BannerText } from "./components/BannerText/bannerText";
import { Sidebar } from "./components/Sidebar";
import { HamburgerMenu } from "./components/HamburgerMenu";

const navigationItems = [
  {
    id: 1,
    name: "Hollow Knight: Silksong",
    title: "silksong",
    img: "",
    text: "",
  },
  {
    id: 2,
    name: "Clair Obscur - Expedition 33",
    title: "clair-obscur",
    img: "",
    text: "",
  },
  {
    id: 3,
    name: "Hades 2",
    title: "hades-2",
    img: "",
    text: "",
  },
  {
    id: 4,
    name: "Path of Exile 2",
    title: "path-exile-2",
    img: "",
    text: "",
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
