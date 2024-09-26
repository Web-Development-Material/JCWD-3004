import { useState, useCallback } from "react";

function Example4() {
  const [count, setCount] = useState<number>(0);

  function incrementNumber() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrementNumber() {
    setCount((prevCount) => prevCount - 1);
  }

  function resetNumber() {
    setCount(0);
  }

  const callbackReset = useCallback(() => {
    return resetNumber();
  }, []);

  const callbackIncrement = useCallback(() => {
    return incrementNumber();
  }, []);

  const callbackDecrement = useCallback(() => {
    return decrementNumber();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-screen h-full">
      <div className="flex space-x-5">
        <button onClick={callbackIncrement}>Increment</button>
        <div className="flex flex-col space-y-5">
          <p>Count : {count}</p>
          <button onClick={callbackReset}>Reset</button>
        </div>
        <button onClick={callbackDecrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Example4;
