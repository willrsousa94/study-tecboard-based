import { Image } from "../Image";
import "./main-content.style.css";

export function MainContent({ navigationItems }) {
  return (
    <section className="main-content">
      <Image src={navigationItems.src}></Image>
    </section>
  );
}
