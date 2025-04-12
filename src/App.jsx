import { useState } from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
const App = () => {
  const [mode, setMode] = useState(false);
  const modeHandler = () => {
    setMode(!mode);
  };
  return (
    <div className={`${mode ? "light" : "dark"} main-body`}>
      <Header mode={mode} modeHandler={modeHandler} />
      <main>
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
