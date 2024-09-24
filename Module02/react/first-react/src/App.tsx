import { BrowserRouter, Routes, Route } from "react-router-dom";

import Example1 from "./pages/example-1";
import Example2 from "./pages/example-2";
import Example3 from "./pages/example-3";
import Example4 from "./pages/example-4";
import Details from "./pages/details";
import Login from "./pages/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Example1 />} path="/" />
        <Route element={<Example2 />} path="/example-2" />
        <Route element={<Example3 />} path="/example-3/:username" />
        <Route element={<Example4 />} path="/example-4" />
        <Route element={<Details />} path="/detail/:title" />
        <Route element={<Login />} path="/auth/login" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
