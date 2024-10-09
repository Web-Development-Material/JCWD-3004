import { counterSlice } from "@/redux/counterSlice";
import { productSlice } from "../productSlice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    product: productSlice.reducer
  },
});
