import { useState, useMemo } from "react";

function Example3() {
  const [count, setCount] = useState<number>(0);

  function expensiveCalculation(num: number) {
    let result = 0;
    for (let i = 0; i < 1000000; i++) {
      result += num;
    }
    return result;
  }

  // useMemo -> untuk menghindari kalkulasi/perhitungan ulang setiap kali component dirender
  const calculatedValue = useMemo(() => {
    return expensiveCalculation(count);
  }, [count]); // -> kalkulasi/perhitungan hanya dilakukan jika count berubah

  return (
    <div className="w-screen h-full justify-center items-center flex flex-col">
      <div className="flex space-x-20 font-semibold w-60 h-20">
        <button
          onClick={() => setCount(count + 1)}
          className="rounded-md bg-green-500 w-full h-full"
        >
          Increment
        </button>
        <div className="flex flex-col text-slate-700">
          <p>Count : {count}</p>
          <p>Expensive Calculation : {calculatedValue}</p>
        </div>
        <button
          onClick={() => setCount(count - 1)}
          className="rounded-md bg-red-500 w-full h-full"
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default Example3;
