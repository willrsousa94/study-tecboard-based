import { useEffect, useRef, useState } from "react";
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
/* const navigationItems = [
  {
    id: 1,
    title: "Hollow Knight: Silksong",
    name: "silksong",
    src: "/silksong.png",
    text: `Texto teste`,
    playlist:
      "https://www.youtube.com/playlist?list=PLFm3GfoIIub-XegMzSWVu4hpTTXoM76zO",
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
]; */

function App() {
  //Stete of the items from db.json
  const [navigationItems, setNavigationItems] = useState([]);

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

  //useEffect to connect with my fake API that I created using json-server
  useEffect(() => {
    fetch("http://localhost:8080/games")
      .then((response) => response.json())
      .then((data) => {
        console.log("conexão bem sucedidade, seguem abaixo os games");
        setNavigationItems(data);
      });
  }, []);

  //useRefs

  const hamburgerMenuRef = useRef(null);
  const sidebarRef = useRef([]);

  const toggleMenu = (event) => {
    event.preventDefault();
    hamburgerMenuRef.current.classList.toggle("open");
    sidebarRef.current.classList.toggle("sidebar-navigation-opened");
    document.querySelector("body").classList.toggle("overlay");
  };

  //App return
  return (
    <>
      <Header>
        <Sidebar
          navigationItems={navigationItems}
          changeMainContent={changeMainContent}
          sidebarRef={sidebarRef}
        ></Sidebar>
        <Banner>
          <HamburgerMenu
            toggleMenu={toggleMenu}
            ref={hamburgerMenuRef}
          ></HamburgerMenu>
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
