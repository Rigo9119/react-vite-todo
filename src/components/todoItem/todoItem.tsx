import { MouseEventHandler } from "react";
import "./todoItem.css";

export type TTodo = {
  todo: string;
  isDone: boolean;
};

interface TodoItemProps {
  todo: string;
  isDone: boolean;
  onDelete: MouseEventHandler<HTMLButtonElement>;
}

export default function TodoItem({ todo, isDone, onDelete }: TodoItemProps) {
  return (
    <li className={`${isDone ? "todo-item--done" : "todo-item"}`}>
      <input type="checkbox" id="topping" name="topping" value="Paneer" />
      <p>{todo}</p>
      <button onClick={onDelete}>Delete item</button>
    </li>
  );
}
