import { useContext, useRef } from "react";
import { TodosContext } from "../store/TodosContext";
import classes from "./NewTodo.module.css";

const NewTodo: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandLet = (event: React.FormEvent) => {
    event.preventDefault();

    const enterdeText = todoTextInputRef.current!.value;

    if (enterdeText.trim().length === 0) {
      return;
    }

    todosCtx.addTodo(enterdeText);

    todoTextInputRef.current!.value = "";
  };
  return (
    <form className={classes.form} onSubmit={submitHandLet}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
