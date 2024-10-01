import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ProductsProps } from "../../utils/interface";
import { useCart } from "../../context/cartContext";
import Card from "../../components/Card";
import axios from "axios";

function Products() {
  const navigate = useNavigate();
  const {addToCart, cart} = useCart()
  const [products, setProduct] = useState<ProductsProps[]>([]);
  const [loading , setLoading] = useState<boolean>(true)

  async function getProducts() {
    try {
      const response = await axios.get("/kelontong/v1/products");
      setProduct(response.data);

      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const totalItems = cart.reduce(
    (total: number, item: ProductsProps) => total + (item.quantity || 0),
    0
  );

  return (
    <div className="p-10 bg-slate-100 w-full h-full flex flex-col jusitfy-center items-center">
      <nav className="fixed top-0 w-screen h-14 bg-white flex justify-end items-center">
        <button
          onClick={() => navigate("/cart")}
          className="h-10 bg-green-500 font-semibold text-white rounded-md flex justify-center items-center"
        >
          See Cart
        </button>
        <p className="text-green-500 font-semibold mx-14">Cart : {totalItems}</p>
      </nav>
      <div>
      <h2 className="text-black font-bold my-10">Products Page</h2>
      </div>

      <div className= "grid grid-cols-2 gap-5">
        {loading ? (
          <div>
            <img src="https://i.pinimg.com/originals/a8/ff/fc/a8fffcf7a02aa895eefb6a52be888637.gif" alt="" />
            <h2 className="text-slate-700 font-bold text-xl">
              {" "}
              Loading Data ... {" "}
            </h2>
          </div>
          ): products?.length === 0 ? (
            <h3>No Product Listed</h3>
          ):(
            products?.map((product: ProductsProps, key: any) => {
              return (
                <Card
                  key={key}
                  id={product.id}
                  title={product.title}
                  description={product.description}
                  image={product.image}
                  price={product.price}
                  onClick={() => {
                    addToCart(product)
                  }}
                  quantity={product.quantity}
                />
              );
            })
        )}

      </div>
    </div>
  );
}

export default Products;
