import React from "react";
import Info from "./components/Info";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";

import "./App.css";

function App() {
  return (
    <div className="App overflow-visible z-3">
      <NavBar />
      <Info />
      <ProductList />
    </div>
  );
}

export default App;
