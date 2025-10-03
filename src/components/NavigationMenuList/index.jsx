import "./navigation-menu-list-style.css";

export function NavigationMenuList({ children, title }) {
  return (
    <li
      className="navigation-menu-list"
      id={`navigation-menu-list-item-${title}`}
    >
      {children}
    </li>
  );
}
