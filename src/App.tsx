import { FormEvent, ChangeEvent, useState } from "react";
import { TTodo } from "./components/todoItem/todoItem";
import "./App.css";
import TodoList from "./components/todoList/todoList";
import TodoForm from "./components/todoForm/todoForm";

const data = [
  { todo: "Todo 1", isDone: false },
  { todo: "Todo 2", isDone: false },
  { todo: "Todo 3", isDone: false },
  { todo: "Todo 4", isDone: false },
];

function App() {
  const [todos, setTodos] = useState<TTodo[]>(data);

  function onHandleSubmit(event: FormEvent<HTMLFormElement>, formData: TTodo) {
    event.preventDefault();

    setTodos([...todos, formData]);
  }

  function onHandleDelete(todoIndex: number) {
    const removeItem = todos.filter((item, index) => index !== todoIndex);

    setTodos(removeItem);
  }

  function onHandleDone(
    event: ChangeEvent<HTMLInputElement>,
    todoIndex: number
  ) {
    const updatedTodos = [...todos];
    updatedTodos[todoIndex].isDone = event.target.checked;

    setTodos(updatedTodos);
  }

  return (
    <main>
      <div>
        <h1>Todo List with react and Vite</h1>
        <TodoForm onSubmit={onHandleSubmit} />
        <TodoList
          todos={todos}
          onDelete={onHandleDelete}
          onDone={onHandleDone}
        />
      </div>
    </main>
  );
}

export default App;
