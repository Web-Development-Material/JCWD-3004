import { useState } from "react";

export function useCounter(initialValue: number = 0) {
  const [count, setCount] = useState<number>(initialValue);

  function incrementNumber() {
    setCount((prev) => prev + 1);
  }

  function decrementNumber() {
    setCount((prev) => prev - 1);
  }

  return {
    count,
    incrementNumber,
    decrementNumber,
  };
}
