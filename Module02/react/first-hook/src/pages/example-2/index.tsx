import { useRef, useState } from "react";

function Example2() {
  const countRef = useRef<number>(0);
  const [render, setRender] = useState<number>(0);

  function incrementNumber() {
    countRef.current += 1;
    console.log("check increment on console : ", countRef.current);
  }

  function decrementNumber() {
    countRef.current -= 1;
    console.log("check decrement on console : ", countRef.current);
  }

  function renderComponent() {
    setRender((prev: any) => prev + 1);
  }

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      <div className="flex space-x-5 font-semibold">
        <button
          onClick={() => incrementNumber()}
          className="bg-green-500 text-white rounded-md"
        >
          +
        </button>
        <p className="text-black">Count : {countRef.current}</p>
        <button
          onClick={() => decrementNumber()}
          className="bg-red-500 text-white rounded-md"
        >
          -
        </button>
      </div>
      <div className="my-5">
        <button
          onClick={() => renderComponent()}
          className="bg-orange-500 text-white font-semibold"
        >
          Re-render Component
        </button>
      </div>
    </div>
  );
}

export default Example2;
