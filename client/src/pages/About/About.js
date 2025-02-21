import React from "react";
import "./About.css";
import Jump from "react-reveal/Jump";
import Zoom from 'react-medium-image-zoom'
const About = () => {
    return (
        <>
            <Jump>
                <div className="about" id="about">
                    <div className="row">
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
                            <Zoom>
                                <img
                                    src="prab4.jpg"
                                    alt="profile_pic"
                                />
                            </Zoom>

                        </div>
                        <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
                            <h1>About me</h1>
                            <p>
                                Hi. I'm Computer Science & Engineering student at United Institute of Technology,Prayagraj.
                                My intrest mostly include Web Devlopment,Problem Solving & Blogging.
                            </p>
                            <p>
                                In my free time, I like communicating with people,traveling,reading article& blogs.
                                I love exploring new technologies & staying updated with the changes in the industry.
                                Feel free to reach out my social channels or plug me in via the options below.
                            </p>
                        </div>
                    </div>
                </div>
            </Jump>
        </>
    );
};

export default About;