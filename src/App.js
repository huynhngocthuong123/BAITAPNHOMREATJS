import logo from "./logo.svg";

import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import { Fragment } from "react";
import Home from "./Page/Home/Home";
import DetailFilm from "./Page/DetailFilm/DetailFilm";


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
      <Route exact path="/detail/:id" component={DetailFilm} />
    </BrowserRouter>
  );
}
export default App;
