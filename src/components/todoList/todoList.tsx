import TodoItem, { TTodo } from "../todoItem/todoItem";
import "./todoList.css";

interface TodoListProps {
  todos: TTodo[];
  onDelete: (index: number) => void;
}

export default function TodoList({ todos, onDelete }: TodoListProps) {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => {
        return (
          <TodoItem
            key={index}
            todo={todo.todo}
            isDone={todo.isDone}
            onDelete={() => onDelete(index)}
          />
        );
      })}
    </ul>
  );
}
