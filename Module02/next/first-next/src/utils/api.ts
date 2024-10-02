import axios from "axios";

export type Product = {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
};

export async function getProducts() {
  const response = await axios.get("/kelontong/v1/products");
  return response.data;
}

export async function deleteProducts(id: string) {
  const response = await axios.delete(`/kelontong/v1/products/${id}`);
  return response.data;
}

export async function createProducts(data: Product) {
  const response = await axios.post("/kelontong/v1/products", {
    data: {
      id: data.id,
      title: data.title,
      description: data.description,
      image: data.image,
      price: data.price,
    },
  });
  return response.data;
}
