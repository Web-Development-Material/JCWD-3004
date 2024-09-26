import { BrowserRouter, Routes, Route } from "react-router-dom"

import Example1 from "./pages/example-1"
import Example2 from "./pages/example-2"
import Example3 from "./pages/example-3"
import Example4 from "./pages/example-4"
import Example5 from "./pages/example-5"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Example1/>} path="/"/>
        <Route element={<Example2/>} path="/example-2"/>
        <Route element={<Example3/>} path="/example-3"/>
        <Route element={<Example4/>} path="/example-4"/>
        <Route element={<Example5/>} path="/example-5"/>
      </Routes>
    </BrowserRouter>
  )
}

export default App