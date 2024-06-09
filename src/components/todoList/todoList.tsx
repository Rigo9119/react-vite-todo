import { ChangeEvent } from "react";
import TodoItem, { TTodo } from "../todoItem/todoItem";
import "./todoList.css";

interface TodoListProps {
  todos: TTodo[];
  onDelete: (index: number) => void;
  onDone: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
  onEdit: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}

export default function TodoList({
  todos,
  onDelete,
  onDone,
  onEdit,
}: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            todo={todo.todo}
            isDone={todo.isDone}
            onDelete={() => onDelete(index)}
            onDone={(event) => onDone(event, index)}
            onEdit={(event) => onEdit(event, index)}
          />
        );
      })}
    </ul>
  );
}
