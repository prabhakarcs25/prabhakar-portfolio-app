import React from 'react'
import './Team.css'
import { BsLinkedin } from "react-icons/bs";

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

function Team() {
    return (
        <>
            <div className="testimonial group" id='testimonial'>
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    MY TEAM
                </h2>
                <hr />
                <div className="row firstrow">
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div className="card cardq">
                            <Zoom>
                                <img class="card-img-top" src="mn.jpg" alt="naveen_maddheshiya" />
                            </Zoom>
                            <div className="card-body">
                                <h5 class="card-title">Naveen Maddheshiya</h5>
                                <p class="card-text">Web Devloper,Editor, Student at "Shri Ramswaroop College Of Engineering and Management(Bachelor of Technology),Lucknow. "He has 2 years of web development experience. </p>

                                <a href="https://www.linkedin.com/in/naveen-maddheshiya-250165272" target="_blank" rel="noreferrer" >
                                    <BsLinkedin color="blue" size={50} className="ms-2" />
                                </a>

                            </div>
                        </div>

                    </div>
                    <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                        <div className="card cardq">
                            <Zoom>
                                <img class="card-img-top" src="ahmad.jpg" alt="Ahmad_husain" />
                            </Zoom>
                            <div className="card-body">
                                <h5 class="card-title">Ahmad Husain</h5>
                                <p class="card-text">Graphics Designer, Photo Editor,Full Stack Devloper,Database Master  Student at United Institute of Technology(Bachelor of Technology),Prayagraj.</p>
                                <a href="https://www.linkedin.com/in/ahmad-husain-09312325b" target="_blank" rel="noreferrer" >
                                    <BsLinkedin color="blue" size={50} className="ms-2" />
                                </a>


                            </div>
                        </div>
                    </div>
                </div>


            </div >
        </>
    )
}

export default Team