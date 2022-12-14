import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./Redux/ConfigStore";
import reportWebVitals from "./reportWebVitals";
import "antd/dist/antd.min.css"; // or 'antd/dist/antd.less'
// import * as signalR from "@aspnet/signalr";
import { URL_API } from "./Util/setting";

const root = ReactDOM.createRoot(document.getElementById("root"));

// export const connection = new signalR.HubConnectionBuilder()
//   .withUrl(`${URL_API}/DatVeHub`)
//   .configureLogging(signalR.LogLevel.Information)
//   .build();

// connection.start().then(() => {
// }).catch((error) => {
//   console.log(error);
// })

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
