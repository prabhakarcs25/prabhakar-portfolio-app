
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineMenuFold } from "react-icons/ai";
import { Link } from "react-scroll";
import Zoom from "react-reveal/Zoom";
import {
    FcAbout,
    FcBiotech,
    FcBusinessContact,
    FcHome,
    FcPortraitMode,
    FcReadingEbook,
    FcVideoProjector,
} from "react-icons/fc";
import "./MobileNav.css";
const MobileNav = () => {
    const [open, setOpen] = useState(false);

    //handle open
    const handleOpen = () => {
        setOpen(!open);
    };

    // handle menu clicks
    const handleMenuClick = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="mobile-nav">
                <div className="mobile-nav-header">
                    {open ? (
                        <AiOutlineMenuFold
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    ) : (
                        <GiHamburgerMenu
                            size={30}
                            className="mobile-nav-icon"
                            onClick={handleOpen}
                        />
                    )}

                    <span className="mobile-nav-title">PRABHAKAR PORTFOLIO</span>
                </div>
                {open && (
                    <div className="mobile-nav-menu">
                        <div className="nav-items">
                            <div className="nav-item">
                                <Zoom>
                                    <div className="navbar-profile-pic">
                                        <img
                                            src="prab1.jpg"
                                            alt="profile pic"
                                        />
                                    </div>
                                </Zoom>
                                <div className="nav-link">
                                    <h6 className="text-success  fw-bold pb-2">PRABHAKAR SINGH</h6>

                                    <Link
                                        to="home"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
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
                                        onClick={handleMenuClick}
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
                                        onClick={handleMenuClick}
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
                                        onClick={handleMenuClick}
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
                                        onClick={handleMenuClick}
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
                                        onClick={handleMenuClick}
                                    >
                                        <FcPortraitMode />
                                        Work Experince
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="testimonial"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcPortraitMode />
                                        MY Team
                                    </Link>
                                </div>

                                <div className="nav-link">
                                    <Link
                                        to="contact"
                                        spy={true}
                                        smooth={true}
                                        offset={-100}
                                        duration={100}
                                        onClick={handleMenuClick}
                                    >
                                        <FcBusinessContact />
                                        Contact
                                    </Link>
                                </div>
                                <h6 className="text-center bg-dander mt-2"> All Right Reserved</h6>
                                <h6 className="text-center bg-dander"> &copy; 2023</h6>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MobileNav;