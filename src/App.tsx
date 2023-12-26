import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const todos = [new Todo("하나"), new Todo("둘")];
  return (
    <div>
      <Todos items={todos} />
    </div>
  );
}

export default App;
