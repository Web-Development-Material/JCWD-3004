import Layout from "../../components/tailwind/Layout";

function Example4() {
  return (
    <Layout>
      {/* menggunakan flexbox */}
      <div className="my-10">
        <h2 className="text-slate-700 font-bold">
          Responsive Design with Tailwind CSS with Flexbox
        </h2>
      </div>
      <div className="w-80 flex flex-col space-y-5">
        <div className="lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500 bg-red-500 bg-rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 1
        </div>
        <div className="lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 2
        </div>
        <div className="lg:bg-blue-500 md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 3
        </div>
      </div>

      {/* menggunakan grid */}

      <div className="my-10">
        <h2 className="text-slate-700 font-bold">
          Responsive Design with Tailwind CSS with Grid
        </h2>
      </div>
      <div className="w-full grid gap-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2">
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 bg-rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 1
        </div>
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 2
        </div>
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 3
        </div>
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 4
        </div>
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 5
        </div>
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 6
        </div>
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 7
        </div>
        <div className="lg:bg-secondary md:bg-green-500 sm:bg-yellow-500 bg-red-500 rounded-md w-full h-16 flex justify-center items-center text-white font-semibold">
          Item 8
        </div>
      </div>
    </Layout>
  );
}

export default Example4;
