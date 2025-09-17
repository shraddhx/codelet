import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';  // ✅ Add this

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <MantineProvider theme={{ fontFamily: 'Fira Code, monospace' }}>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
