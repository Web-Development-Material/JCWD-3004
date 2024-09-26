import { useState, useEffect } from "react";

type DataState = {
  id: number;
  title: string;
  body: string;
  userId: number;
};

function Example1() {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<DataState[]>();
  const [loading, setLoading] = useState<boolean>(true);
  const [userIdFilter, setUserIdFilter] = useState<number | string>("");

  //   useEffect(() => {
  //     console.log("Component Mounted"); // --> kondisi ketika mounted

  //     return () => {
  //       console.log("Component Unmounted"); // --> kondisi ketika unmounted
  //     };
  //   }, []);

  //   useEffect(() => {
  //     console.log("Component updated, count : ", count); // --> kondisi ketika updation
  //   }, [count]);

  // -- contoh penggunaan lifecycle : fetching API

  async function fetchData(userId?: number | string) {
    try {
      const queryParams = userId ? "?userId=" + userId : "";
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts" + queryParams
      );
      const result = await response.json();
      // simulasi loading
      setTimeout(() => {
        setData(result);
        setLoading(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  }

  // function untuk trigger API setiap kali userIdFilter berubah
  function handleFilterChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setUserIdFilter(value);
    fetchData(value); // panggil API dengan parameter userId yang baru
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-screen h-full flex flex-col justify-center items-center">
      {/* case 1 : count number */}
      <h2 className="text-slate-700 font-semibold my-10">
        Count Number : {count}
      </h2>
      <div className="mt-10 w-40 h-20 flex justify-center items-center space-x-4 my-10">
        <button
          onClick={() => setCount(count + 1)}
          className="w-full h-full bg-green-500 text-white font-semibold rounded-md"
        >
          +
        </button>
        <button
          onClick={() => setCount(count - 1)}
          className="w-full h-full bg-red-500 text-white font-semibold rounded-md"
        >
          -
        </button>
      </div>
      {/* case 2 : fetch api with loading */}

      {/* untuk filter API berdasarkan user id */}
      <div className="my-5">
        <label
          htmlFor="userIdFilter"
          className="block mb-2 text-slate-700 font-semibold"
        >
          Filter by User ID :
        </label>
        <input
          type="number"
          id="userIdFilter"
          className="border border-gray-400 p-2 rounded-md"
          placeholder="Enter User ID"
          value={userIdFilter}
          onChange={handleFilterChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-10 my-10">
        {loading ? (
          <h2 className="text-slate-700 font-bold text-xl">Loading Data ...</h2>
        ) : (
          data?.map((item: DataState, key) => {
            return (
              <div key={key} className="w-60 h-full rounded-md shadow-sm p-5">
                <h2 className="text-slate-700 font-semibold">
                  Author : {item.userId}
                </h2>
                <h2 className="text-slate-700 font-bold">{item.title}</h2>
                <p className="text-slate-700">{item.body}</p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Example1;
