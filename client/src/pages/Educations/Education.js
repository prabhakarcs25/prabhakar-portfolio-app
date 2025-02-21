import React from "react";
import { MdSchool } from "react-icons/md";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
const Education = () => {
    return (
        <>
            <div className=" education" id="education">
                <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
                    Education Details
                </h2>
                <hr />
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  black" }}
                        date="2019 - 2022"
                        iconStyle={{ background: "#138781", color: "#ffff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Diploma</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Computer Science & Engineering
                        </h4>
                        <h5>Maharana Pratap Polytechnic Gorakhpur</h5>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: "white", color: "black" }}
                        contentArrowStyle={{ borderRight: "7px solid  white" }}
                        date="2022 - 2025"
                        iconStyle={{ background: "#138781", color: "#fff" }}
                        icon={<MdSchool />}
                    >
                        <h3 className="vertical-timeline-element-title">Bachelor in Technology</h3>
                        <h4 className="vertical-timeline-element-subtitle">
                            Bachelor in Computer Sciene & Engineering
                        </h4>
                        <h5>United Institute of Technology Prayagraj</h5>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </>
    );
};

export default Education;