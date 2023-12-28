import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandLet = (event: React.FormEvent) => {
    event.preventDefault();

    const enterdeText = todoTextInputRef.current!.value;

    if (enterdeText.trim().length === 0) {
      return;
    }

    props.onAddTodo(enterdeText);
  };
  return (
    <form onSubmit={submitHandLet}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={todoTextInputRef} />
      <button>Add Todo</button>
    </form>
  );
};

export default NewTodo;
