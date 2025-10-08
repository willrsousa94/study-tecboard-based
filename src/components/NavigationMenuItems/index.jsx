import "./navigation-menu-list-style.css";

export function NavigationMenuItems({ children, title }) {
  return (
    <li
      className="navigation-menu-items"
      id={`navigation-menu-list-item-${title}`}
    >
      {children}
    </li>
  );
}
