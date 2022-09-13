import logo from "./logo.svg";

import { BrowserRouter, Route, Router } from "react-router-dom";
import Header from "./Component/Header/Header";
import { Fragment } from "react";
import Home from "./Page/Home/Home";
import DetailFilm from "./Page/DetailFilm/DetailFilm";
import { createBrowserHistory } from "history";
import { HomeTemplate } from "./templete/HomeTemplate/HomeTemplate";
import { Usertemplate } from "./templete/UserTeamplate/Usertemplate";
import Register from "./Page/Register/Register";
import Login from "./Page/Login/Login";


export const history = createBrowserHistory()
function App() {
  return (
    <Router history={history}>
      {/* <h1 className="text-5xl">hello world</h1> */}
      <HomeTemplate path="/" exact Component={Home} />
      <HomeTemplate path="/home/:id" exact Component={Home} />
      <Route exact path="/detail/:id" component={DetailFilm} />
      <Usertemplate exact path="/register" Component={Register} />
      <Usertemplate exact path="/login" Component={Login} />

    </Router>
  );
}
export default App;
