import "./navigation-menu-list-style.css";

export function NavigationMenuItems({ children, title, name }) {
  return (
    <li
      className="navigation-menu-items"
      id={`navigation-menu-list-item-${title}`}
      name={name}
    >
      {children}
    </li>
  );
}
