import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { store } from "./redux/store";
import "./index.css";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    {/* <PersistGate loading={null} persistor={mainStore.persistor}> */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

    {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);