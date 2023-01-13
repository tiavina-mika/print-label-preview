import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Label from "./Label";
import { data } from "./utils/data";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Label {...data} />
  </StrictMode>
);
