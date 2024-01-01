import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandLet = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandLer = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => String(todo.id) !== todoId);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addTodoHandLet} />
      <Todos items={todos} onRemoveTodo={removeTodoHandLer} />
    </div>
  );
}

export default App;
