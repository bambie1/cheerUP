import React from "react";
import SearchPage from "./pages/SearchPage";
import HomePage from "./pages/HomePage";
import QuotesPage from "./pages/QuotesPage";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/categories">
            <SearchPage />
          </Route>
          <Route path="/quotes">
            <QuotesPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
