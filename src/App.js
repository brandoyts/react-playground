import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Counter from "./components/Counter";
import Users from "./components/Users";
import Todos from "./components/Todos";
import Comments from "./components/Comments";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/users" component={Users} />
          <Route path="/todos" component={Todos} />
          <Route path="/comments" component={Comments} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
