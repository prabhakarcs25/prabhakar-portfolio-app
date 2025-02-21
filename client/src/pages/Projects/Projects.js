import React from "react";
import "./Projects.css";
import Zoom from "react-medium-image-zoom";
import Spin from "react-reveal/Spin";
const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          This is the top project which devlopend by me and my team-
        </p>
        {/* card design */}
        <div className="row" id="ads">
          <Spin>
            <div className="col-md-4 cardhover">
              <div className="card rounded ">
                <div className="card-image">
                  <span className="card-notify-badge">PROJECT 1 || HOST</span>
                  <Zoom>
                    <img src="project1.png" alt="project1" />
                  </Zoom>
                </div>

                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Nodejs</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase fw-bold">PORTFOLIO-APP</h6>
                  </div>

                  <a
                    className="ad-btn1 "
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/prabhak18/prabhakar-portfolio.git"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 cardhover">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">PROJECT 2</span>
                  <Zoom>
                    <img src="pro2.jpg" alt="project2" />
                  </Zoom>
                </div>
                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">Python</span>

                  <span className="card-detail-badge">Tkinter</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase fw-bold">My NotePad</h6>
                  </div>
                  <a
                    className="ad-btn1"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/prabhak18/notepad-python"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 cardhover">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">PROJECT-3</span>
                  <Zoom>
                    <img src="pro3.jpg" alt="project1" />
                  </Zoom>
                </div>
                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">React</span>
                  <span className="card-detail-badge">Nodejs</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">MongoDB</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase fw-bold">
                      Tour Management system
                    </h5>
                  </div>
                  <a
                    className="ad-btn1"
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/prabhakarcs25/tour_management"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 cardhover">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">"SafeZone4her"</span>
                  <Zoom>
                    <img src="pro3.jpg" alt="project1" />
                  </Zoom>
                </div>
                <div className="card-image-overly m-auto mt-4">
                  <span className="card-detail-badge">Dart</span>
                  <span className="card-detail-badge">Flutter</span>
                  <span className="card-detail-badge">Working....</span>

                  {/* <span className="card-detail-badge"></span> */}
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase fw-bold">Women Safety-App</h5>
                  </div>
                  <a
                    className="ad-btn1"
                    target="_blank"
                    rel="noreferrer"
                    href="#"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          </Spin>
        </div>
      </div>
    </>
  );
};

export default Projects;
