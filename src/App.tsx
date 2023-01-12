import { useState } from "react";
import Info from "./components/Info";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import { ThemeProvider } from "./context";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="App overflow-visible z-3">
      <ThemeProvider>
        <NavBar />
        <Info />
        <ProductList />
        <Contact />
      </ThemeProvider>
    </div>
  );
}

export default App;
