import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Toggle from "./components/Toggle";

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div data-theme={theme}>
      <header>
        <Toggle theme={theme} setTheme={setTheme} />
      </header>
      <main>
        <Hero />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
