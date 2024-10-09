import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, deleteProducts, Product } from "@/redux/productSlice";

function Products() {
  const { product, loading, error } = useSelector(
    (state: any) => state.product
  );
  const dispatch: any = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <div className="w-screen h-screen bg-slate-400 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold text-black">Product List</h1>
      {loading && <p className="text-red-700 font-bold">Loading ...</p>}
      {error && <p className="text-red-700 font-bold">Error : {error}</p>}

      <div className="grid grid-cols-3 gap-3">
        {product?.map((product: Product, key: number) => {
          return (
            <div key={key} className="rounded w-full h-full bg-white flex flex-col space-y-4 p-3">
              <h2 className="text-black font-semibold">{product?.title}</h2>
              <p className="text-black">{product?.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
