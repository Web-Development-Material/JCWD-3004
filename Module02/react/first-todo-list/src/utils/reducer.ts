export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

type ActionType =
  | { type: "ADD_TODO"; payload: string }
  | { type: "TOGGLE_TODO"; payload: number }
  | { type: "EDIT_TODO"; payload: { id: number; text: string } }
  | { type: "DELETE_TODO"; payload: number };

export function todoReducer(state: Todo[], action: ActionType): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false },
      ];
    case "EDIT_TODO":
      return state.map((todo: any) =>
        todo.id === action.payload.id
          ? {
              ...todo,
              text: action.payload.text,
            }
          : todo
      );
    case "DELETE_TODO":
      return state.filter((todo: any) => todo.id !== action.payload);
    case "TOGGLE_TODO":
      return state.map((todo: any) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
  }
}
