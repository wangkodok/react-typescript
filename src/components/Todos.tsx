import React from "react";
import Todo from "../models/todo";
import TodosItem from "./TodosItem";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => {
        return <TodosItem key={item.id} text={item.text} />;
      })}
    </ul>
  );
};
export default Todos;
