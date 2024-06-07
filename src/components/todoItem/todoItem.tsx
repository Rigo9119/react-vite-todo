import { ChangeEvent, MouseEventHandler } from "react";
import "./todoItem.css";

export type TTodo = {
  todo: string;
  isDone: boolean;
};

interface TodoItemProps {
  todo: string;
  isDone: boolean;
  onDelete: MouseEventHandler<HTMLButtonElement>;
  onDone: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoItem({
  todo,
  isDone,
  onDelete,
  onDone,
}: TodoItemProps) {
  return (
    <li className={`${isDone ? "todo-item--done" : "todo-item"}`}>
      <input
        type="checkbox"
        id={`todo-${todo}`}
        name="done"
        onChange={(event) => onDone(event)}
      />
      <p>{todo}</p>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
