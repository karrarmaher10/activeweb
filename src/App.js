import React, { Component } from "react";
import "./App.css";
import Container from "./components/container/Container";
import Navbar from "./components/navbar/Navbar";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Navbar />
          <Route exact path="" component={Container} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
