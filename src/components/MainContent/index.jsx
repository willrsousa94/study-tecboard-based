import { ContentText } from "../ContentText";
import { Image } from "../Image";
import "./main-content.style.css";

export function MainContent({ currentContent }) {
  return (
    <section className="main-content">
      <Image src={currentContent.src}></Image>
      <ContentText>{currentContent.text}</ContentText>
      <ContentText><a href={`${currentContent.playlist}`}>{currentContent.name}</a></ContentText>
    </section>
  );
}
