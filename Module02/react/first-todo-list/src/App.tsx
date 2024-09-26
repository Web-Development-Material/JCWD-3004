import { BrowserRouter, Routes, Route } from "react-router-dom";

import Checklist from "./pages/checklist";
import TodoList from "./pages/todo-list";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Checklist />} path="/" />
        <Route element={<TodoList />} path="/todo-list" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
