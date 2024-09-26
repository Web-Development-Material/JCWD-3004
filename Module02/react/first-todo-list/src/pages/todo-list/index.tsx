import { useReducer, FormEvent } from "react";
import { todoReducer, Todo } from "../../utils/reducer";

function TodoList() {
  const initialTodo: Todo[] = [];
  const [todos, dispatch] = useReducer(todoReducer, initialTodo);
  const [inputText, setInputText] = useReducer(
    (state: string, action: string) => action,
    ""
  );

  function handleAddTodo(e: FormEvent) {
    e.preventDefault();
    if (inputText) {
      dispatch({ type: "ADD_TODO", payload: inputText });
      setInputText("");
    }
  }

  function handleEditTodo(id: number, newText: string) {
    dispatch({
      type: "EDIT_TODO",
      payload: {
        id,
        text: newText,
      },
    });
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <div className="max-w-md mx-auto p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">To Do List</h1>
        <form onSubmit={handleAddTodo} className="flex mb-4">
          <input
            className="flex-grow border px-4 py-2 rounded-1"
            type="text"
            value={inputText}
            onChange={(e: any) => setInputText(e.target.value)}
            placeholder="Add new task ..."
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-r"
          >
            Add
          </button>
        </form>

        <ul className="space-y-2">
          {todos?.map((todo) => (
            <li
              key={todo.id}
              className={
                todo.completed
                  ? "flex justify-between items-center px-4 py-2 border rounded line-through text-gray-500"
                  : "flex justify-between items-center px-4 py-2 border rounded text-gray-500"
              }
            >
              <input
                className="flex-grow border px-2 py-1 mr-4"
                type="text"
                value={todo.text}
                onChange={(e: any) => handleEditTodo(todo.id, e.target.value)}
              />
              <div>
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                  onClick={() =>
                    dispatch({ type: "TOGGLE_TODO", payload: todo.id })
                  }
                >
                  {todo.completed ? "Undo" : "Complete"}
                </button>
                <button
                  className="bg-red-500 text-white px-2 py-1 rounded"
                  onClick={() =>
                    dispatch({
                      type: "DELETE_TODO",
                      payload: todo.id,
                    })
                  }
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
