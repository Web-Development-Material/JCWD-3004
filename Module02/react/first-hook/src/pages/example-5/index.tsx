import { useReducer } from "react";
import { reducer } from "../../utils/reducer";

function Example5() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div className="flex flex-col w-screen h-full justify-center items-center">
      <div className="flex space-x-5">
        <button
          onClick={() => dispatch({ type: "increment" })}
          className="rounded-md bg-green-500 w-full h-full font-semibold text-white"
        >
          Increment
        </button>
        <div className="flex flex-col space-y-5 mx-5">
          <p className="text-slate-700 font-bold">Count : {count}</p>
          <button
            onClick={() => dispatch({ type: "reset" })}
            className="rounded-md bg-blue-500 w-full h-full font-semibold text-white"
          >
            Reset
          </button>
        </div>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          className="rounded-md bg-red-500 w-full h-full font-semibold text-white"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Example5;
