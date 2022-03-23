import React from "react";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Hero from "./components/layouts/Hero";
import Search from "./components/layouts/Search";
import Results from "./components/layouts/Results";
import { Provider } from "./context";

function App() {
  return (
    <Provider>
      <React.Fragment>
        <Navbar />
        <Hero />
        <Search />
        <Results />
      </React.Fragment>
    </Provider>
  );
}

export default App;
