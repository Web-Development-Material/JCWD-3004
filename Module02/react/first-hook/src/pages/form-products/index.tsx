import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  productSchema,
  ProductData,
} from "../../utils/validation/productSchema";
import axios from "axios";
import Swal from "sweetalert2";

function FormProducts() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductData>({ resolver: zodResolver(productSchema) });
  const [image, setImage] = useState<string>("");

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  async function onSubmit(data: ProductData) {
    const bodyRequest = {
      title: data.title,
      description: data.description,
      image: image
        ? image
        : "https://i.pinimg.com/564x/6a/f1/ec/6af1ec6645410a41d5339508a83b86f9.jpg",
      price: Number(data.price),
    };
    try {
      const response = await axios.post("/kelontong/v1/products", {
        title: bodyRequest.title,
        description: bodyRequest.description,
        image: bodyRequest.image,
        price: bodyRequest.price,
      });
      if (response) {
        Swal.fire({
          icon: "success",
          title: "Successfully created product",
          text: "Product will be display on your list product",
          confirmButtonText: "OK",
        });
      }
    } catch (error: any) {
      Swal.fire({
        icon: "error",
        title: "Failed to create product",
        text: `Error : ${error.message}`,
        confirmButtonText: "OK",
      });
    }
  }

  return (
    <div className="w-screen bg-white h-full flex flex-col justify-center items-center">
      <div className="p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-black font-bold mb-6">
          Create Product Form
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            {/* input title menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Title</label>
            <input
              type="text"
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.title ? "border-red-500" : ""
              }`}
              {...register("title")}
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
            {/* input image menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Image</label>
            <input
              type="file"
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded`}
              onChange={onImageChange}
            />

            {/* input description menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Description</label>
            <input
              type="text"
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.description ? "border-red-500" : ""
              }`}
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
            {/* input price menggunakan rhf */}
            <label className="block text-gray-700 mb-2">Price</label>
            <input
              type="text"
              className={`w-full p-2 border border-gray-300 bg-white text-black rounded ${
                errors.price ? "border-red-500" : ""
              }`}
              {...register("price")}
            />
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 mt-5"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FormProducts;
