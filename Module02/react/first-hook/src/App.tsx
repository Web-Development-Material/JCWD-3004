import { BrowserRouter, Routes, Route } from "react-router-dom";

import Example1 from "./pages/example-1";
import Example2 from "./pages/example-2";
import Example3 from "./pages/example-3";
import Example4 from "./pages/example-4";
import Example5 from "./pages/example-5";
import Example6 from "./pages/example-6";
import Example7 from "./pages/example-7";
import Example8 from "./pages/example-8";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Example1 />} path="/" />
        <Route element={<Example2 />} path="/example-2" />
        <Route element={<Example3 />} path="/example-3" />
        <Route element={<Example4 />} path="/example-4" />
        <Route element={<Example5 />} path="/example-5" />
        <Route element={<Example6 />} path="/example-6" />
        <Route element={<Example7 />} path="/example-7" />
        <Route element={<Example8 />} path="/example-8" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
