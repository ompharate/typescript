
type propsType = {
  todo: TodoItemType;
  updateHandler: (id: TodoItemType["id"]) => void;
  deleteHandler: (id: TodoItemType["id"]) => void;
};

const TodoItem = ({ todo, deleteHandler, updateHandler }: propsType) => {
  return (
    <div>
      <h1>{todo.title}</h1>
      <button onClick={() => updateHandler(todo.id)}>Update</button>
      <button onClick={() => deleteHandler(todo.id)}>Delete</button>
    </div>
  );
};

export default TodoItem;
