import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [];

// untuk membuat slice dari todo
export const todoSlice = createSlice({
  name: "todos", // -> nama slice nya
  initialState, // -> nilai initial state
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    editTodo(state, action: PayloadAction<{id: number; text: string}>){
      const todo = state.find((todo) => todo.id === action.payload.id);
      if(todo) {
        todo.text = action.payload.text
      }
    },
    toggleTodo(state, action: PayloadAction<number>) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(state, action: PayloadAction<number>) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, removeTodo, editTodo } = todoSlice.actions;
