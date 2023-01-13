import { useContext } from "react";
import Info from "./components/Info";
import ProductList from "./components/ProductList";
import NavBar from "./components/NavBar";
import Contact from "./components/Contact";
import { ThemeContext } from "./context";

import "./App.css";

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App overflow-visible z-3"
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <NavBar />
      <Info />
      <ProductList />
      <Contact />
    </div>
  );
}

export default App;
