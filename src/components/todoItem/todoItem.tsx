import { ChangeEvent, MouseEventHandler, useState } from "react";
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
  onEdit: (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function TodoItem({
  todo,
  isDone,
  onDelete,
  onDone,
  onEdit,
}: TodoItemProps) {
  const [toggleEdit, setToggleEdit] = useState(false);
  return (
    <li className={`${isDone ? "todo-item--done" : "todo-item"}`}>
      <input
        type="checkbox"
        id={`todo-${todo}`}
        name="done"
        onChange={(event) => onDone(event)}
      />
      {toggleEdit ? <input type="text" onChange={onEdit} /> : <p>{todo}</p>}
      <button onClick={() => setToggleEdit(!toggleEdit)}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </li>
  );
}
