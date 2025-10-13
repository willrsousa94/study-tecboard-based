import "./hamburger-menu.style.css";

export function HamburgerMenu() {
  const toggleMenu = (event) => {
    document.querySelector("#nav-icon1").classList.toggle("open");
    document
      .querySelector(".sidebar-navigation")
      .classList.toggle("sidebar-navigation-opened");
    document.querySelector("body").classList.toggle("overlay");
  };

  return (
    <div id="nav-icon1" onClick={toggleMenu}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
