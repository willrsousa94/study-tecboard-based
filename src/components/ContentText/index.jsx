import "./content-text.style.css";

export function ContentText({ children }) {
  return (
    <div className="content-text-box">
      <p className="content-text">{children}</p>
    </div>
  );
}
