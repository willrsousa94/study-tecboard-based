import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { BannerText } from "./components/BannerText";
import { Sidebar } from "./components/Sidebar";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { MainContent } from "./components/MainContent";

const navigationItems = [
  {
    id: 1,
    name: "Hollow Knight: Silksong",
    title: "silksong",
    src: "../public/silksong.png",
    text: "",
  },
  {
    id: 2,
    name: "Clair Obscur - Expedition 33",
    title: "clair-obscur",
    src: "../public/clair-obscur-expedition-33.jpg",
    text: "",
  },
  {
    id: 3,
    name: "Hades 2",
    title: "hades-2",
    src: "",
    text: "",
  },
  {
    id: 4,
    name: "Path of Exile 2",
    title: "path-exile-2",
    src: "../public/poe2.png",
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
      <Header>
        <Sidebar
          navigationItems={navigationItems}
          changeBannerText={changeBannerText}
        ></Sidebar>
        <Banner>
          <HamburgerMenu></HamburgerMenu>
          <BannerText currentText={bannerText} />
        </Banner>
      </Header>
      <Main>
        <MainContent navigationItems={navigationItems[0]}></MainContent>
      </Main>
    </>
  );
}

export default App;
