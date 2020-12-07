import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import Register from "./components/Register";
// import RegisterError from "./components/RegisterError";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import BookDetails from "./components/BookDetails";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { BaseLayout } from "./components/BaseLayout";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <BaseLayout>
        <Switch>
          <Route component={App} path="/" exact />
          <Route component={Register} path="/register" exact />
          {/* <Route component={RegisterError} path="/user/register-error" exact /> */}
          <Route component={Books} path="/books" exact />
          <Route component={AddBook} path="/add-book" />
          <Route component={BookDetails} path="/books/:bookId" />
        </Switch>
      </BaseLayout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
