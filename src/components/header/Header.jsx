import { useState } from "react";
import "./header.css";
const Header = ({mode,modeHandler}) => {
  const [showModel, setShowModel] = useState(false);
  const showModelHandler = () => {
    setShowModel(false)
  }
  return (
    <header>
      <div className="container flex-center">
        <button className="show-model" onClick={() =>setShowModel(true)}><i className="fa-solid fa-bars"></i></button>
        {showModel && (
          <div className="menu">
            <ul className="model">
              <li className="exit-model">
                <button onClick={() => setShowModel(false)}><i class="fa-solid fa-xmark"></i></button>
              </li>
              <li>
                <a href="#home" onClick={showModelHandler}>About</a>
              </li>
              <li>
                <a href="#projects" onClick={showModelHandler}>Projects</a>
              </li>
              <li>
                <a href="#contact" onClick={showModelHandler}>Contact</a>
              </li>
            </ul>
          </div>
        )}

        <ul className="navbar flex-center">
          <li>
            <a href="#home">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <button className="mode" onClick={modeHandler}>
          {
            mode ? (
              <i className="fa-solid fa-sun"></i>
            ) : 
            <i className="fa-regular fa-moon"></i>
          }
        </button>
      </div>
    </header>
  );
};

export default Header;
