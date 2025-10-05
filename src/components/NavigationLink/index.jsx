import "./navigation-link.style.css";

export function NavigationLink({ children, href, ...rest }) {
  return (
    <a href={href} className="menu-link" {...rest}>
      <span>{children}</span>
    </a>
  );
}
