import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsProps } from "../../utils/interface";
import Card from "../../components/Card";
import axios from "axios";

function Products() {
  const navigate = useNavigate();
  const [products, setProduct] = useState<ProductsProps[]>([]);

  async function getProducts() {
    try {
      const response = await axios.get("/kelontong/v1/products");
      setProduct(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="p-10 bg-slate-100 w-full h-full flex flex-col jusitfy-center items-center">
      <nav className="fixed top-0 w-screen h-14 bg-white flex justify-end items-center">
        <button
          onClick={() => navigate("/cart")}
          className="h-10 bg-green-500 font-semibold text-white rounded-md flex justify-center items-center"
        >
          See Cart
        </button>
        <p className="text-green-500 font-semibold mx-14">Cart : 0</p>
      </nav>
      <h2 className="text-black font-bold my-10">Products Page</h2>
      <div className="grid grid-cols-2 gap-5">
        {products &&
          products?.map((product: ProductsProps, key: any) => {
            return (
              <Card
                key={key}
                id={product.id}
                title={product.title}
                description={product.description}
                image={product.image}
                price={product.price}
                onClick={() => alert("belum jadi bos..")}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Products;
