import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

import "./styles/FC90.css";
import "./styles/FC70.css";
import "./styles/base.css";
import "./styles/preview.css";
import "./styles/fonts.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
