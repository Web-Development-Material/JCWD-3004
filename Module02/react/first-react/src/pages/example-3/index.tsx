import { useState } from "react";
import { useParams } from "react-router-dom";

import Layout from "../../components/tailwind/Layout";
import Card from "../../components/tailwind/Card";
import Button from "../../components/tailwind/Button";

function Example3() {
  const [count, setCount] = useState<number>(0);
  const [mode, setMode] = useState<string>("light");
  const { username } = useParams();

  function switchMode() {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  }

  function resetNumber() {
    setCount(0);
  }

  function incrementNumber() {
    setCount(count + 1);
  }

  function decrementNumber() {
    if (count <= 0) {
      alert("Out of range");
    } else {
      setCount(count - 1);
    }
  }

  return (
    <Layout mode={mode === "light" ? "dark" : "light"}>
      <nav className="p-5 h-16 w-full bg-blue-500 fixed top-0 flex justify-start items-center">
        <h2 className="text-white font-semibold">Hello, {username} </h2>
      </nav>

      {/* contoh logo whatsapp ngambang */}
      <div className="fixed bottom-0 right-0 m-5">
        <a href="">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png"
            width={100}
            height={100}
          />
        </a>
      </div>

      <div className="my-10">
        <h2 className="text-slate-700 font-bold">State Example</h2>
      </div>

      {/* contoh penggunaan state pada react */}

      {/* contoh dark/light mode */}
      <div className="flex justify-center items-center my-10">
        <button
          className={
            mode === "light" ? "bg-black text-white" : "bg-white text-black"
          }
          onClick={() => switchMode()}
        >
          Mode
        </button>
      </div>

      {/* contoh increment/decrement number */}
      <div className="flex justify-center items-center space-x-5">
        <Button
          id="increment"
          type="green"
          title="Increment"
          onClick={() => incrementNumber()}
        />
        <div className="flex flex-col justify-center items-center space-y-5">
          <button onClick={() => resetNumber()}>Reset Number</button>
          <h2 className="font-bold text-slate-700">{count}</h2>
        </div>
        <Button
          id="decrement"
          type="red"
          title="Decrement"
          onClick={() => decrementNumber()}
        />
      </div>

      <div className="my-10">
        <h2 className="text-slate-700 font-bold">Grid Example</h2>
      </div>

      {/* contoh grid menggunakan tailwind css*/}
      <div className="grid grid-cols-3 gap-5">
        <div className="w-60 h-full">
          <Card
            id="card-klepon"
            image="https://i.pinimg.com/564x/4f/f8/72/4ff872a775cffa158c378b39c8f85ecd.jpg"
            title="Klepon: Traditional Indonesian Sweet"
            description="Klepon is a traditional Indonesian snack made from glutinous rice flour, filled with palm sugar, and coated in grated coconut. A perfect treat with a burst of sweetness in every bite!"
          />
        </div>
        <div className="w-60 h-full">
          <Card
            id="card-klepon"
            image="https://i.pinimg.com/564x/4f/f8/72/4ff872a775cffa158c378b39c8f85ecd.jpg"
            title="Klepon: Traditional Indonesian Sweet"
            description="Klepon is a traditional Indonesian snack made from glutinous rice flour, filled with palm sugar, and coated in grated coconut. A perfect treat with a burst of sweetness in every bite!"
          />
        </div>
        <div className="w-60 h-full">
          <Card
            id="card-klepon"
            image="https://i.pinimg.com/564x/4f/f8/72/4ff872a775cffa158c378b39c8f85ecd.jpg"
            title="Klepon: Traditional Indonesian Sweet"
            description="Klepon is a traditional Indonesian snack made from glutinous rice flour, filled with palm sugar, and coated in grated coconut. A perfect treat with a burst of sweetness in every bite!"
          />
        </div>
      </div>
    </Layout>
  );
}

export default Example3;
