import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

import { getProductDetails, Product, editProduct } from "@/utils/api";
import { productSchema } from "@/utils/validation/productSchema";

function EditProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ resolver: zodResolver(productSchema) });
  const router = useRouter();
  const [image, setImage] = useState<string>("");

  //   Get the product information based on id
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProductsDetails"],
    queryFn: getProductDetails,
  });

  console.log("data", data);

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

  function handleFormSubmit(data: Product) {
    createProductMutation.mutate(data);
  }

  return (
    <div className="w-screen bg-white h-full flex flex-col justify-center items-center">
      <div className="p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl text-black font-bold mb-6">Edit Product</h2>
        <form onSubmit={handleSubmit(handleFormSubmit)}>
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

export default EditProduct;
