import "./navigation-menu.style.css";

export function NavigationMenu({ children }) {
  return (
    <nav>
      <ul className="navigation-menu-list">{children}</ul>
    </nav>
  );
}
