import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    initialValue: 0,
  },
  reducers: {
    increment(state) {
      state.initialValue += 1;
    },
    decrement(state) {
      state.initialValue -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
