import { ColorModeScript } from "@chakra-ui/react"
import * as React from "react"
import { App } from "./App"
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ColorModeScript />
    <App />
  </React.StrictMode>
);

reportWebVitals();
