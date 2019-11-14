import React from "react";
import { Link } from "react-router-dom";
import Router from "./Utils/Router";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to="/signup">Sign Up</Link>
      <Link to="/signin">Sign In</Link>
      <Router />
    </div>
  );
}

export default App;
