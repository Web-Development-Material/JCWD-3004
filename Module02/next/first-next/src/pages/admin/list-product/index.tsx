import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Swal from "sweetalert2";
import { createProducts, Product } from "@/utils/api";
import { productSchema } from "@/utils/validation/productSchema";

import Header from "@/components/Header";
import { getProducts, deleteProducts, editProduct } from "@/utils/api";
import { queryClient } from "@/pages/_app";

function ListProduct() {
  const router = useRouter();
  const { data, error, isLoading } = useQuery({
    queryKey: ["getProducts"],
    queryFn: getProducts,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Product>({ resolver: zodResolver(productSchema) });

  const deleteProductMutation = useMutation({
    mutationFn: async function (id: string) {
      deleteProducts(id);
    },
    onSuccess: function () {
      Swal.fire("Deleted!", "Product has been deleted", "success");
      queryClient.invalidateQueries({ queryKey: ["deleteProducts"] }); // refresh data setelah delete
    },
    onError: function () {
      Swal.fire("Error", "Failed to delete product", "error");
    },
  });

  function handleDeleteProduct(id: string) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProductMutation.mutate(id);
      }
    });
  }

  const editProductMutation = useMutation({
    mutationFn: async function (data: Product) {
      editProduct(data);
    },
    onSuccess: function () {
      Swal.fire("Updated!", "Product has been updated", "success");
      queryClient.invalidateQueries({ queryKey: ["getProducts"] }); // refresh data setelah update
    },
    onError: function () {
      Swal.fire("Error", "Failed to update product", "error");
    },
  });

  function handleEditProduct(data: Product) {
    Swal.fire({
      title: "Edit Product",
      html: `
      <input id="swal-input1" class="swal2-input w-full" value="${data.title}" placeholder="Product Name"></input>
      <input id="swal-input2" class="swal2-input w-full" value="${data.description}" placeholder="Product Description"></input>
      <input type='file' id="swal-input3" class="swal2-input w-full" value="${data.image}" placeholder="Product Image"></input>
      <input id="swal-input4" class="swal2-input w-full" value="${data.price}" placeholder="Product Price"></input>
      `,
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedProduct: Product = {
          id: data.id,
          title: (document.getElementById("swal-input1") as HTMLInputElement)
            ?.value,
          description: (
            document.getElementById("swal-input2") as HTMLInputElement
          )?.value,
          image: (document.getElementById("swal-input3") as HTMLInputElement)
            ?.value,
          price: Number(
            (document.getElementById("swal-input4") as HTMLInputElement)?.value
          ),
        };

        editProductMutation.mutate(updatedProduct);
      }
    });
  }

  if (isLoading)
    return (
      <div className="bg-white flex flex-col space-y-5 w-screen h-screen justify-center items-center">
        <p className="text-center font-bold text-orange-600">Loading ...</p>;
      </div>
    );

  return (
    <>
      <Header>
        <title>Admin - List Product</title>
      </Header>
      <div className="container mx-auto p-8 bg-white text-black">
        <h1 className="text-2xl font-bold mb-6">Product Table</h1>
        <div className="mb-4">
          <button
            onClick={() => router.push({ pathname: "/admin/create-product" })}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Create New Product
          </button>
        </div>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-orange-300 text-white">
              <th className="py-3 px-6 text-left">Title</th>
              <th className="py-3 px-6 text-left">Description</th>
              <th className="py-3 px-6 text-left">Price</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((product: Product, key: number) => {
              return (
                <tr
                  key={key}
                  className={`border-b border-gray-200 text-gray-700 ${
                    key % 2 === 0 ? "bg-orange-100" : "bg-orange-200"
                  }`}
                >
                  <td className="py-3 px-6 text-left">{product.title}</td>
                  <td className="py-3 px-6 text-left">{product.description}</td>
                  <td className="py-3 px-6 text-left">{product.price}</td>
                  <td className="py-3 px-6 text-center">
                    <button
                      onClick={() => handleEditProduct(product)}
                      className="mx-2 py-2 px-4 bg-green-500 text-white rounded-md hover:bg-green-600"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product.id)}
                      className="mx-2 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ListProduct;
