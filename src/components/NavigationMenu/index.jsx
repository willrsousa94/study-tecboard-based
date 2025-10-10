import "./navigation-menu.style.css";

export function NavigationMenu({ children }) {
  return (
    <nav className="navigation">
      <ul className="navigation-menu-list">{children}</ul>
    </nav>
  );
}
