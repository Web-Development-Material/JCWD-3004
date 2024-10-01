import React, { createContext, useContext, useState } from "react";
import { ProductsProps } from "../utils/interface";
import Swal from "sweetalert2";

const CartContext = createContext<any>(null);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cart, setCart] = useState<ProductsProps[]>([]);

  const addToCart = (product: ProductsProps) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    Swal.fire({
        icon: "success",
        title: "Added to cart",
        text: `${product.title} has been added to cart`     
    })
}

const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id))
    // Swal.fire({
    //     title: "Are you sure?",
    //     text: "You won't be able to revert this!",
    //     icon: "warning",
    //     showCancelButton: "s#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Yes, delete it!",
    // }).then((result) => {
    //     if(result.isConfirmed) {
           
    //         Swal.fire({
    //             title: "Deleted!",
    //             text: "Your Products has been deleted",
    //             icon: "success"
    //         })
    //     }
    // })
}

return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
)
}

export const useCart = () => {
    return useContext(CartContext)
}