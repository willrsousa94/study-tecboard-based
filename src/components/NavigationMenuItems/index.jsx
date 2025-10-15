import "./navigation-menu-list-style.css";

export function NavigationMenuItems({ children, title, ...rest }) {
  return (
    <li className="navigation-menu-items" {...rest}>
      {children}
    </li>
  );
}
