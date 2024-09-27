import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { ThemeProvider } from "./context/themeContext.tsx";
import { Provider } from "react-redux";
import { store } from "./utils/store.ts";

import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </Provider>
);
