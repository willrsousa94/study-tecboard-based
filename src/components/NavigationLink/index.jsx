import "./navigation-link.style.css";

export function NavigationLink(props) {
  return (
    <a {...props} className="menu-link">
      <span>{props.children}</span>
    </a>
  );
}
