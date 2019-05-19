import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Panel from "./components/Panel";

const App = () => (
  <div className="container">
    <Navbar />
    <Jumbotron />
    <Panel />
  </div>
);

export default App;
