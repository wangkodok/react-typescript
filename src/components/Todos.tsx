import React, { useContext } from "react";
import TodosItem from "./TodosItem";
import { TodosContext } from "../store/TodosContext";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => {
        return (
          <TodosItem
            key={item.id}
            text={item.text}
            onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
          />
        );
      })}
    </ul>
  );
};
export default Todos;
