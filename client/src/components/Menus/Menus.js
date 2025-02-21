import React from "react";
import "./Menus.css";
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { BiSolidGroup } from "react-icons/bi"
import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcReadingEbook,
    FcVideoProjector,
} from "react-icons/fc";
const Menus = ({ toggle }) => {
    return (
        <>
            {toggle ? (
                <>
                    <Zoom>
                        <div className="navbar-profile-pic">
                            <img
                                src="prab3.jpg"
                                alt="profile pic"
                            />
                        </div>
                    </Zoom>
                    <Zoom>
                        <h4 className="fw-bold text-center text-danger">PRABHAKAR SINGH</h4>
                    </Zoom>
                    <Fade left>
                        <div className="nav-items">
                            <div className="nav-item">
                                <div className="nav-link">
                                    <Link to="home" spy={true} smooth={true} offset={-100} duration={100}>
                                        <FcHome />
                                        Home
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="about"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcAbout />
                                        About
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="education"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcReadingEbook />
                                        Education
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="techstack"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcBiotech />
                                        Tech Stack
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="projects"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcVideoProjector />
                                        Projects
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="work"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcPortraitMode />
                                        Work Experince
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link to="testimonial" spy={true} smooth={true} offset={-100} duration={100}>
                                        <BiSolidGroup />
                                        Team
                                    </Link>
                                </div>
                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                    >
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                                <h6 className=" mt-3 bg-dander">All Right Reserved</h6>
                                <h6 className="">&copy; 2023</h6>
                            </div>
                        </div>
                    </Fade>
                </>
            ) : (
                <>
                    <div className="nav-items">
                        <div className="nav-item">
                            <div className="nav-link">
                                <zoom>

                                </zoom>
                                <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcHome />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcAbout />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcReadingEbook />
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link
                                    to="techstack"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBiotech />
                                </Link>
                            </div>

                            <div className="nav-link">
                                <Link
                                    to="projects"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcVideoProjector />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="work"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcPortraitMode />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="testimonial"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <BiSolidGroup />
                                </Link>
                            </div>
                            <div className="nav-link">
                                <Link
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    duration={100}
                                >
                                    <FcBusinessContact />
                                </Link>
                            </div>

                            <h6 className=" mt-5 fw-bold bg-dander" > &copy; 2023</h6>
                        </div>
                    </div>

                </>
            )
            }
        </>
    );
};

export default Menus;