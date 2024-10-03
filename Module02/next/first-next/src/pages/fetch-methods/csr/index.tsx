import React, { useEffect, useState, Suspense } from "react";
import { getProducts, Product } from "@/utils/api";

import Header from "@/components/Header";

function CSRPage() {
  const [products, setProduct] = useState<Product[]>([]);
  const DataProductComponent = React.lazy(
    () => import("@/components/DataProduct")
  );

  async function fetchProducts() {
    try {
      const response = await getProducts();
      setProduct(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchProducts(); // -> Client Side Rendering (data dan UI diproses pada browser)
  }, []);

  function LoadingPage() {
    return (
      <div className="w-screen h-screen bg-white flex justify-center items-center">
        <h2 className="text-orange-700 text-2xl">Loading Data ...</h2>
      </div>
    );
  }

  return (
    <>
      <Header>
        <title>Fetch Methods - Client Side Rendering</title>
      </Header>
      <div className="w-screen bg-white h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-2 gap-5">
          {products &&
            products?.map((product: Product, key: number) => {
              return (
                <Suspense fallback={<LoadingPage />}>
                  <DataProductComponent
                    key={key}
                    title={product.title}
                    description={product.description}
                  />
                </Suspense>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default CSRPage;
