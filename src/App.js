import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import Search from "./components/layouts/Search";
import Results from "./components/layouts/Results";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <Hero />
          <Search />
          <Results />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
