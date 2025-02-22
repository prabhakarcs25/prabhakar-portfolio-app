import React from "react";
import { useTheme } from "../../context/ThemeContext";
import Typewriter from "typewriter-effect";
import Resume from "../../assets/docs/PRABHAKAR_SINGH.pdf";
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
                        <h3>Hi 👋 I'm</h3>

                        <h1>
                            <Typewriter
                                options={{
                                    strings: [
                                        "PRABHAKAR SINGH",
                                        "FullStack Developer!",
                                        "Mern Stack Developer!",
                                        "Database  Expert!",
                                        "Blogger!"


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
                                href="https://api.whatsapp.com/send?phone=7905041978"
                                rel="noreferrer"
                                target="_blank"
                            >
                                Hire Me
                            </a>
                            <a className="btn btn-cv" href={Resume} download="PRABHAKAR_SINGH.pdf">
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