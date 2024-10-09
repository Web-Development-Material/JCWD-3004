import { useSelector } from "react-redux";

function Details() {
  const counter = useSelector((state: any) => state.counter.initialValue);

  return (
    <div className="w-screen h-screen bg-slate-300 flex flex-col justify-center items-center">
      <div className="flex">
        <h2 className="text-red-700 font-bold">
          State from counterSlice : {counter}
        </h2>
      </div>
    </div>
  );
}

export default Details;
