import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

interface ProductState {
  products: Product[];
  loading: false;
  error: null;
}

const initialState: ProductState = {
  products: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get(
      "https://66f65798436827ced976b37a.mockapi.io/kelontong/v1/products"
    );
    return response.data;
  }
);

export const deleteProducts = createAsyncThunk(
  "products/deleteProducts",
  async (id: string) => {
    const response = await axios.delete(
      "https://66f65798436827ced976b37a.mockapi.io/kelontong/v1/products/" + id
    );
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {},
  extraReducers(builder) {
    // case : fetch products
    builder.addCase(fetchProducts.pending, (state: any) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchProducts.fulfilled, (state: any, action: any) => {
      state.loading = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state: any, action: any) => {
      state.loading = false;
      state.error = action.error.message || "Something went wrong";
    });

    // case : delete products
    builder.addCase(deleteProducts.fulfilled, (state: any, action: any) => {
      state.product = state.product.filter(
        (product: Product) => product.id !== action.payload
      );
    });
  },
});
