import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import { Fragment } from "react";
import Home from "./Page/Home/Home";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Route
        exact
        path="/"
        render={(propsRoute) => {
          return (
            <Fragment>
              <Header />
              <Home {...propsRoute} />
            </Fragment>
          );
        }}
      />
    </BrowserRouter>
  );
}

export default App;
