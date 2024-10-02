import axios from "axios";

export type Product = {
  title: string;
  description: string;
  image: string;
  price: number;
};

export async function getProducts() {
  const response = await axios.get("/kelontong/v1/products");
  return response.data;
}
