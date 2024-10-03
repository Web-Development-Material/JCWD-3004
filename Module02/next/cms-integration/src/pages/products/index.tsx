import { useEffect, useState } from "react";
import { getAllEntries } from "@/utils/api";

function Products() {
  const [entry, setEntries] = useState<any>();

  async function fetchAllEntries() {
    try {
      const data = await getAllEntries({
        spaceId: "wvnc8bovhstl",
        environmentId: "master",
      });
      setEntries(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchAllEntries();
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-200 flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 gap-5">
        {entry &&
          entry?.items?.map((product: any, key: number) => {
            return (
              <div
                key={key}
                className="w-full h-full bg-white rounded-md space-y-5"
              >
                <h2 className="text-slate-700 font-semibold">
                  {product?.fields?.title}
                </h2>
                <h2 className="text-slate-700">
                  {product?.fields?.description}
                </h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Products;
