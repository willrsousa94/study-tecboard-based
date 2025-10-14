import { useRef } from "react";
import "./hamburger-menu.style.css";

export function HamburgerMenu({ref, toggleMenu}) {

  /*   const toggleMenu = (event) => {
    document.querySelector("#nav-icon1").classList.toggle("open");
    document
      .querySelector(".sidebar-navigation")
      .classList.toggle("sidebar-navigation-opened");
    document.querySelector("body").classList.toggle("overlay");
  }; */


  return (
    <div ref={ref} onClick={toggleMenu} id="nav-icon1" >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
