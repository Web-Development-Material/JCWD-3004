import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";

import Example1 from "./pages/example-1";
import Example2 from "./pages/example-2";
import Example3 from "./pages/example-3";
import Example4 from "./pages/example-4";
import Example5 from "./pages/example-5";
import Example6 from "./pages/example-6";
import Example7 from "./pages/example-7";
import Example8 from "./pages/example-8";
import Register from "./pages/register";
import Home from "./pages/home";
import Products from "./pages/products";
import FormProducts from "./pages/form-products";
import Cart from "./pages/cart";

import { CartProvider } from "./context/cartContext";

function App() {
  axios.defaults.baseURL = import.meta.env.VITE_PRODUCT_API;

  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<Example1 />} path="/" />
        <Route element={<Example2 />} path="/example-2" />
        <Route element={<Example3 />} path="/example-3" />
        <Route element={<Example4 />} path="/example-4" />
        <Route element={<Example5 />} path="/example-5" />
        <Route element={<Example6 />} path="/example-6" />
        <Route element={<Example7 />} path="/example-7" />
        <Route element={<Example8 />} path="/example-8" />
        <Route element={<Register />} path="/auth/register" />
        <Route element={<Home />} path="/home" />
        <Route element={<Products />} path="/products" />
        <Route element={<Cart />} path="/cart" />
        <Route element={<FormProducts />} path="/form-products" />
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
