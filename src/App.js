import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "@reach/router";
import NavbarMain from "./components/Navbar";
import Home from "./pages/Home";
import Lefkada from "./pages/Lefkada";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarMain />
        <Router>
          <Home path="/" />
          <Lefkada path="/lefkada" />
        </Router>
      </div>
    );
  }
}

export default App;
