import logo from "./logo.svg";

import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from "./Component/Header/Header";
import { Fragment } from "react";
import Home from "./Page/Home/Home";
import DetailFilm from "./Page/DetailFilm/DetailFilm";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templete/HomeTemplate/HomeTemplate";

const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      <HomeTemplate path="/" exact Component={Home} />
      <Route exact path="/detail/:id" component={DetailFilm} />
    </Router>
  );
}
export default App;
