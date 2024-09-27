import { useNavigate } from "react-router-dom";

import { useCounter } from "../../hooks/useCounter";
import { useToggle } from "../../hooks/useToggle";
import { useTheme } from "../../context/themeContext";

function Example6() {
  const { incrementNumber, decrementNumber, count } = useCounter();
  const { trigger, toggle } = useToggle();
  const { toggleTheme, theme } = useTheme();
  const navigate = useNavigate();

  return (
    <div
      className={
        theme === "light"
          ? "bg-white w-screen h-full flex flex-col justify-center items-center"
          : "bg-black w-screen h-full flex flex-col justify-center items-center"
      }
    >
      {/* contoh 1 custom hook : increment decrement */}
      <div className="flex flex-col space-y-5">
        <h2
          className={
            theme === "light"
              ? "text-slate-700 font-bold"
              : "text-white font-bold"
          }
        >
          Increment Decrement Custom Hook
        </h2>
        <div className="flex space-x-5">
          <button
            onClick={incrementNumber}
            className={
              theme === "light"
                ? "bg-green-500 text-black font-semibold rounded-sm"
                : "bg-green-500 text-white font-semibold rounded-sm"
            }
          >
            Increment
          </button>
          <p
            className={
              theme === "light"
                ? "text-slate-700 font-bold"
                : "text-white font-bold"
            }
          >
            {count}
          </p>
          <button
            onClick={decrementNumber}
            className={
              theme === "light"
                ? "bg-red-500 text-black font-semibold rounded-sm"
                : "bg-red-500 text-white font-semibold rounded-sm"
            }
          >
            Decrement
          </button>
        </div>
      </div>
      {/* contoh 2 custom hook : toggle button */}
      <div className="flex flex-col justify-center items-center space-y-5 my-10">
        <h2
          className={
            theme === "light"
              ? "text-slate-700 font-bold"
              : "text-white font-bold"
          }
        >
          Toggle Button Custom Hook
        </h2>
        <div className="flex space-x-5">
          <button
            onClick={toggle}
            className={
              trigger
                ? "px-4 py-2 font-bold rounded bg-green-500 text-white"
                : "px-4 py-2 font-bold rounded bg-red-500 text-white"
            }
          >
            {trigger ? "ON" : "OFF"}
          </button>
        </div>
      </div>
      {/* contoh dark/light mode menggunakan context */}
      <div className="flex flex-col justify-center items-center space-y-5 my-10">
        <h2
          className={
            theme === "light"
              ? "text-slate-700 font-bold"
              : "text-white font-bold"
          }
        >
          Dark/Light Mode with Context
        </h2>
        <div className="flex flex-col space-y-5">
          <button
            onClick={toggleTheme}
            className={
              theme === "light"
                ? "px-4 py-2 font-bold rounded bg-black text-white"
                : "px-4 py-2 font-bold rounded bg-white text-black"
            }
          >
            {theme === "light" ? "Dark" : "Light"}
          </button>
          <button
            onClick={() => navigate("/example-7")}
            className={
              theme === "light"
                ? "px-4 py-2 font-bold rounded bg-black text-white"
                : "px-4 py-2 font-bold rounded bg-white text-black"
            }
          >
            Navigate to Example 7
          </button>
        </div>
      </div>
    </div>
  );
}

export default Example6;
