import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./home.css";
import Fade from "react-reveal/Fade";

const Home = () => {
  const [theme, setTheme] = useTheme();
  //handle theme
  const handleTheme = () => {
    setTheme((prevState) => (prevState === "light" ? "dark" : "light"));
  };
  return (
    <>
      <div className="container-fluid home-container" id="home">
        <div className="theme-btn" onClick={handleTheme}>
          {theme === "light" ? (
            <BsFillMoonStarsFill size={30} />
          ) : (
            <BsFillSunFill size={30} />
          )}
        </div>
        <div className="container home-content">
          <Fade right>
            <h2>Hi 👋, I'm <span style={{ color: "#138781", fontWeight: "bold" }}>Abhishek Kumar</span></h2>
            <h1>
              <Typewriter
                options={{
                  strings: [
                    "Full Stack Developer!",
                    "MERN Stack Developer!",
                    "Aspiring Data Scientist.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>

          </Fade>
          <Fade bottom>
            <div className="home-buttons">
              <a
                className="btn btn-hire"
                href="https://api.whatsapp.com/send?phone=6299738041"
                rel="noreferrer"
                target="_blank"
              >
                Hire Me
              </a>
              <a
                className="btn btn-cv"
                href="https://drive.google.com/uc?export=download&id=1e7dxCSLfkjHqJp62CoASCVvSIU0mx5Dw"
                target="_blank"
                rel="noopener noreferrer"
              >
                My Resume
              </a>

            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default Home;
