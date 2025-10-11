import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { BannerText } from "./components/BannerText";
import { Sidebar } from "./components/Sidebar";
import { HamburgerMenu } from "./components/HamburgerMenu";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { MainContent } from "./components/MainContent";

//Array of items, I'm planning and learning how to insert this on a JSON.
const navigationItems = [
  {
    id: 1,
    name: "Hollow Knight: Silksong",
    title: "silksong",
    src: "/silksong.png",
    text: "",
  },
  {
    id: 2,
    name: "Clair Obscur - Expedition 33",
    title: "clair-obscur",
    src: "/clair-obscur-expedition-33.jpg",
    text: "",
  },
  {
    id: 3,
    name: "Hades 2",
    title: "hades-2",
    src: "hades-2.png",
    text: "",
  },
  {
    id: 4,
    name: "Path of Exile 2",
    title: "path-exile-2",
    src: "/poe2.png",
    text: "",
  },
];

function App() {
  // Use States
  const [bannerText, setBannerText] = useState("Início");
  const [mainContent, setMainContent] = useState("");

  //All change something functions using the useState
  const changeBannerText = (newText) => {
    setBannerText(newText);
  };

  const changeMainContent = (newContent) => {
    setMainContent(newContent);
  };

  //App return
  return (
    <>
      <Header>
        <Sidebar
          navigationItems={navigationItems}
          changeBannerText={changeBannerText}
          changeMainContent={changeMainContent}
        ></Sidebar>
        <Banner>
          <HamburgerMenu></HamburgerMenu>
          <BannerText currentText={bannerText} />
        </Banner>
      </Header>
      <Main>
        <MainContent currentContent={mainContent}></MainContent>
      </Main>
    </>
  );
}

export default App;
