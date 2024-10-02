import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";

import { getProducts, Product } from "@/utils/api";
import Card from "@/components/Card";

function Home() {
  const router = useRouter();
  const { username } = router.query; // -> mengambil params dari yang dikirim halaman sebelumnya

  const { data, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  console.log("product : ", data);

  return (
    <div className="w-screen h-full bg-white flex flex-col justify-center items-center">
      <nav className="space-x-5 px-10 fixed top-0 bg-orange-500 text-white font-bold w-full h-10 flex justify-between items-center">
        <div className="flex space-x-5">
          <label>Hello, {username}</label>
        </div>
        <div className="flex space-x-5">
          <a href="">Home</a>
          <a href="">Profile</a>
        </div>
      </nav>
      {isLoading ? (
        <h2 className="text-orange-500 font-bold">Loading product ...</h2>
      ) : (
        <div className="grid grid-cols-2 gap-7 p-10 my-10">
          {data?.map((product: Product, key: any) => {
            return (
              <Card
                key={key}
                id="product"
                title={product.title}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
