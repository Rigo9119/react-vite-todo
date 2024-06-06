import { ChangeEvent, FormEvent, useState } from "react";
import { TTodo } from "../todoItem/todoItem";
import "./todoForm.css";

export type TFormData = TTodo;

interface TodoFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>, fomrData: TFormData) => void;
}

export default function TodoForm({ onSubmit }: TodoFormProps) {
  const [formData, setFormData] = useState({
    todo: "",
    isDone: false,
  });

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;
    setFormData({ ...formData, todo: value });
  }

  return (
    <form className="todo-form" onSubmit={(event) => onSubmit(event, formData)}>
      <input
        type="text"
        name="todo"
        placeholder="Add todo"
        className="todo-input"
        onChange={handleChange}
      />
      <input type="submit" className="todo-submit" />
    </form>
  );
}
