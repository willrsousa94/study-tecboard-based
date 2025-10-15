import { Button } from "../Button";
import { Input } from "../Input";
import "./add-game-form.style.css";

export function AddGameForm({ onSubmit }) {
  return (
    <form action={onSubmit} className="game-form">
      <Input type="text" placeholder="Qual o nome do jogo?" />
      <Input type="text" placeholder="URL da imagem" />
      <Input placeholder="Qual o nome do jogo?" />
      <Input placeholder="Qual o nome do jogo?" />
      <Button>Adicionar</Button>
    </form>
  );
}
