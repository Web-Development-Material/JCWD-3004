import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo, Todo, editTodo } from "../../redux/todoSlice";
import Swal from "sweetalert2";

function Example8() {
  const [newTodo, setNewTodo] = useState<string>("");
  const todos = useSelector((state: any) => state.todos);
  const dispatch = useDispatch();

  function handleAddTodo() {
    if (newTodo) {
      dispatch(addTodo(newTodo));
      setNewTodo("");
    }
  }

  function handleEditTodo(todo: Todo){
    Swal.fire({
      title: "Edit To Do",
      input: "text",
      inputValue: todo.text
    }).then((result) => {
      dispatch(editTodo({id: todo.id, text: result.value}));
    })
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4 text-center">To Do List</h2>
        <div className="flex mb-4">
          <input
            className="flex-grow border px-4 py-2 rounded-1"
            type="text"
            placeholder="Add new task ..."
            value={newTodo}
            onChange={(e: any) => setNewTodo(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded-1"
          >
            Add
          </button>
        </div>
        <ul className="space-y-2">
          {todos?.map((todo: Todo) => (
            <li
              key={todo.id}
              className="cursor-pointer flex justify-between items-center px-4 py-2 border rounded text-black"
              
            >
              <span
                className={
                  todo.completed
                    ? "cursor-pointer flex justify-between items-center px-4 py-2 border rounded line-through text-white"
                    : "cursor-pointer flex justify-between items-center px-4 py-2 border rounded text-white"
                }
                onClick={() => dispatch(toggleTodo(todo.id))}
              >
                {todo.text}
              </span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => handleEditTodo(todo)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded"
                onClick={() => dispatch(removeTodo(todo.id))}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Example8;
