class Todo {
  //   id: string;
  id: number;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    // this.id = new Date().toISOString();
    this.id = Math.random();
  }
}

export default Todo;
