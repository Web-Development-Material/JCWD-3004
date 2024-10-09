import { increment, decrement } from "@/redux/counterSlice";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

function DemoIncrementDecrement() {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const counter = useSelector((state: any) => state.counter.initialValue);

  function handleIncrement() {
    dispatch(increment());
  }

  function handleDecrement() {
    dispatch(decrement());
  }

  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center">
      <div className="flex justify-center items-center space-x-4">
        <button
          onClick={handleIncrement}
          className="w-40 h-16 p-3 bg-green-500 text-white font-semibold"
        >
          +
        </button>
        <div className="flex flex-col space-y-5">
          <h2 className="text-black">Count : {counter}</h2>
          <button
            onClick={() => router.push({ pathname: "/details" })}
            className="w-40 h-16 p-3 bg-white text-black font-semibold"
          >
            Navigate to Details
          </button>
        </div>

        <button
          onClick={handleDecrement}
          className="w-40 h-16 p-3 bg-red-500 text-white font-semibold"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default DemoIncrementDecrement;
