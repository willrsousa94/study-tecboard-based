import { useState } from "react";
import "./App.css";
import { Banner } from "./components/Banner";
import { NavigationBar } from "./components/NavigationBar";
import { BannerText } from "./components/BannerText/bannerText";

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
  const [bannerText, setBannerText] = useState(navigationItems[0].name);

  const changeBannerText = (newText) => {
    setBannerText(newText);
  };

  return (
    <main>
      <header>
        <NavigationBar
          navigationItems={navigationItems}
          changeBannerText={changeBannerText}
        />
      </header>
      <Banner>
        <BannerText currentText={bannerText} />
      </Banner>
    </main>
  );
}

export default App;
