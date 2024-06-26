import "./style.css";

interface Todo {
  title: string;
  isCompleted: boolean;
  readonly id: string;
}
const todos: Todo[] = [];

const todoContainer = document.querySelector(
  ".todo-container"
) as HTMLDivElement;

const todoInput = document.querySelector("#todo-input") as HTMLInputElement;

const myForm = document.querySelector("#myform") as HTMLFormElement;

myForm.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();

  const todo: Todo = {
    title: todoInput.value,
    isCompleted: false,
    id: Math.random().toString(36).substr(2, 9),
  };

  todos.push(todo);
  todoInput.value = "";

  renderTodo(todos);
};

const generateTodoItem = (todo: Todo) => {
  const item: HTMLDivElement = document.createElement("div");
  item.className = "todo";

  //creating a checkbox
  const checkBox: HTMLInputElement = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  checkBox.className = "isCompleted";
  checkBox.checked = todo.isCompleted;
};

const renderTodo = (todos: Todo[]) => {
  todos.forEach((item) => {
    generateTodoItem(item);
  });
};
