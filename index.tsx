import React from "react";
import { render } from "react-dom";

import App from "./src/App.tsx";
import "./index.css";

interface AppProps { }
interface AppState {
  name: string;
}

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>, document.getElementById('root'));