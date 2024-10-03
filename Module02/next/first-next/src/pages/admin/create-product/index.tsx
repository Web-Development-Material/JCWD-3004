import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";

import Header from "@/components/Header";
import { createProducts, Product } from "@/utils/api";
import { productSchema } from "@/utils/validation/productSchema";

function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ resolver: zodResolver(productSchema) });
  const router = useRouter();
  const [image, setImage] = useState<string>("");

  const createProductMutation = useMutation({
    mutationFn: async function (data: Product) {
      data = {
        id: data.id,
        title: data.title,
        image: data.image,
        description: data.description,
        price: data.price,
      };
      createProducts(data);
    },
    onSuccess: function () {
      Swal.fire("Success", "Product created succcessfully!", "success");
      router.push("/admin/list-product");
    },
    onError: function () {
      Swal.fire("Error", "Failed to create product!", "error");
    },
  });

  function onImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    console.log(file?.name);
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
    <>
      <Header>
        <title>Admin - Create Product</title>
      </Header>
      <div className="w-screen bg-white h-full flex flex-col justify-center items-center">
        <div className="p-8 rounded-lg shadow-md w-96">
          <h2 className="text-2xl text-black font-bold mb-6">
            Create Product Form
          </h2>
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
    </>
  );
}

export default CreateProduct;
