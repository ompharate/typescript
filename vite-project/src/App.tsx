import { useState } from "react";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState<TodoItemType[]>([]);

  const [title, setTitle] = useState<TodoItemType["title"]>();

  const submitHandler = (): void => {
    const newTodo: TodoItemType = {
      id: Math.floor(Math.random() * 1000).toString(),
      title: title || "",
      isCompleted: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setTitle("");
  };

  const deleteHandler = (id: TodoItemType["id"]): void => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };
  // const updateHandler = (id: TodoItemType["id"]): void => {
  //   const filteredTodos = todos.filter((todo)=> todo.id == id)
  //   setTitle(filteredTodos);
  // }

  return (
    <div>
      <div
        style={{
          margin: "auto",
          maxWidth: "70%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <input
          onChange={(e) => setTitle(e.target.value)}
          style={{ padding: "20px" }}
          type="text"
          value={title}
          placeholder="Task"
        ></input>
        <button
          onClick={submitHandler}
          style={{ padding: "20px", cursor: "pointer" }}
        >
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          updateHandler={updateHandler}
          deleteHandler={deleteHandler}
        />
      ))}
    </div>
  );
}

export default App;
