import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { BannerText } from "./components/BannerText";
import { Sidebar } from "./components/Sidebar";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";

//Array of items, I'm planning and learning how to insert this on a JSON.
const navigationItems = [
  {
    id: 1,
    title: "Hollow Knight: Silksong",
    name: "silksong",
    src: "/silksong.png",
    text: `Texto teste`,
  },
  {
    id: 2,
    title: "Clair Obscur - Expedition 33",
    name: "clair-obscur",
    src: "/clair-obscur-expedition-33.jpg",
    text: `Texto teste`,
  },
  {
    id: 3,
    title: "Hades 2",
    name: "hades-2",
    src: "hades-2.png",
    text: `Texto teste`,
  },
  {
    id: 4,
    title: "Path of Exile 2",
    name: "path-exile-2",
    src: "/poe2.png",
    text: `Texto teste`,
  },
  {
    id: 5,
    title: "Baldur's Gate 3",
    name: "baldurs-gate-3",
    src: "/baldurs-gate-3.jpg",
    text: `Texto teste`,
  },
];

function App() {
  // Use States
  const [mainContent, setMainContent] = useState({
    title: "Início",
    text: `Texto inicial que será mudado ao acessar um jogo`,
    src: "/wizarding-world-portrait.png",
  });

  //All change something functions using the useState

  const changeMainContent = (newContent) => {
    setMainContent(newContent);
  };

  //App return
  return (
    <>
      <Header>
        <Sidebar
          navigationItems={navigationItems}
          changeMainContent={changeMainContent}
        ></Sidebar>
        <Banner>
          <HamburgerMenu></HamburgerMenu>
          <BannerText currentText={mainContent.title} />
        </Banner>
      </Header>
      <Main>
        <MainContent currentContent={mainContent}></MainContent>
      </Main>
      <Footer>Desenvolvido por William R. Sousa</Footer>
    </>
  );
}

export default App;
