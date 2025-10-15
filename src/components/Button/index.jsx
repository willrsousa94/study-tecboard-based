import "./button.style.css";

export function Button({ children, ...rest }) {
  return (
    <button {...rest} className="save-item-button">
      {children}
    </button>
  );
}
