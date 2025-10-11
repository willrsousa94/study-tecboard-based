import { Image } from "../Image";
import "./main-content.style.css";

export function MainContent({ currentContent }) {
  return (
    <section className="main-content">
      <Image src={currentContent.src}></Image>
    </section>
  );
}
