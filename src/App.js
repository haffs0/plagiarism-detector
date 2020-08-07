import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import EssayList from "./components/EssayList";
import Result from "./components/Result";
import PrivateRoute from "./components/PrivateRoute";
import GlobalStyle from "./styles/Global";
import LoginForm from "./components/LoginForm";
import PageNotFound from "./components/PageNotFound";


const App = () => (
  <BrowserRouter>
    <Header/>
    <Switch>
      <Route exact path="/" component={LoginForm}/>
      <PrivateRoute path="/essay-list" component={EssayList}/>
      <PrivateRoute path="/result" component={Result}/>
      <Route component={PageNotFound}/>
    </Switch>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;