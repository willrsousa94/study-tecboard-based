import { Button } from "../Button";
import "./add-game-form.style.css";

export function AddGameForm({ onSubmit }) {
  return (
    <form action={onSubmit}>
      <Button>Adicionar</Button>
    </form>
  );
}
