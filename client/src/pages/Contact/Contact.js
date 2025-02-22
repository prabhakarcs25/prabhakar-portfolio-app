
import "./Contact.css";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser'
import Rotate from "react-reveal/Rotate";
import LightSpeed from "react-reveal/LightSpeed";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_xtiudqn', 'template_ylmgeya', form.current, '-adi_QARhBSDcvlna')
            .then((result) => {
                console.log(result.text);

                console.log("Mesage sent successfull");

            }, (error) => {
                console.log(error.text);
            });
    };

    function handleClick() {

        alert('Message Send Successfully...!!');
    }
    return (
        <>
            <div className=" contact" id="contact">
                <div className="card card0 border-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-6 col-xl-6 col-sm-12">
                            <div className="card1">
                                <div className="row border-line">
                                    <LightSpeed>
                                        <img
                                            src="contact3.png"
                                            alt="contact"
                                            className="image"
                                        />

                                    </LightSpeed>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <Rotate>
                                <div className="card2 d-flex card border-0 px-4 py-5">
                                    <div className="row">
                                        <div className="row">
                                            <h6>
                                                Contact With
                                                <a href="https://www.linkedin.com/in/prabhakarcs25/" target="_blank" rel="noreferrer">
                                                    <BsLinkedin color="blue" size={50} className="ms-2" />
                                                </a>
                                                <a href="https://github.com/prabhak18" target="_blank" rel="noreferrer">
                                                    <BsGithub color="black" size={50} className="ms-2" />
                                                </a>
                                                <a href="https://instagram.com/prabhakarcs25?igshid=NGVhN2U2NjQ0Yg==" rel="noreferrer" target="_blank">
                                                    <AiFillInstagram color="red" size={50} className="ms-2" />
                                                </a>



                                            </h6>
                                        </div>

                                        <div className="row px-3 mb-4">
                                            <div className="line" />
                                            <small className="or text-center">OR</small>
                                            <div className="line" />
                                        </div>
                                        <form ref={form} onSubmit={sendEmail} >
                                            <div className="row px-3">
                                                <input
                                                    type="text"
                                                    name="user_name"
                                                    autoComplete="off"
                                                    placeholder="Enter Your Name"
                                                    className="mb-3"


                                                />
                                            </div>
                                            <div className="row px-3">
                                                <input
                                                    type="email"
                                                    name="user_email"
                                                    autoComplete="off"
                                                    placeholder="Enter Your Email Address"
                                                    className="mb-3"

                                                />
                                            </div>
                                            <div className="row px-3">
                                                <textarea
                                                    type="text"
                                                    name="message"
                                                    autoComplete="off"
                                                    placeholder="Write Your Message"
                                                    className="mb-3"

                                                />
                                            </div>
                                            <div className="row px-3">
                                                {/* <button className="button" type="submit">
                                                    SEND MESSAGE
                                                </button> */}

                                                <button className="button" type="submit" onClick={handleClick}>
                                                    Send Message
                                                </button>

                                            </div>
                                        </form>



                                    </div>
                                </div>

                            </Rotate>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );

};

export default Contact;