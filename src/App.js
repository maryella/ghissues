import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import IssueList from "./components/issuelist";
import Issue from "./components/singleissue";

function App() {
  return (
    <div className="App">
      <Router>
        <nav></nav>
        <Route path="/" exact>
          <IssueList />
        </Route>
        <Route path="/category/:category_name?"></Route>

        <Route path="/issue/:id?" component={Issue}></Route>
      </Router>
    </div>
  );
}

export default App;
