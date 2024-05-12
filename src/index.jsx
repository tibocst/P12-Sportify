import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import { Provider } from "react-redux";
import store from "./utils/store";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);