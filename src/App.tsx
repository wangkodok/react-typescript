import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import TodosContext from "./store/TodosContext";

function App() {
  return (
    <div>
      <TodosContext>
        <NewTodo />
        <Todos />
      </TodosContext>
    </div>
  );
}

export default App;
