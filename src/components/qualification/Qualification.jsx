import React, { useState } from "react";
import "./qualification.css";
import { HiOutlineAcademicCap, HiOutlineBriefcase, HiOutlineCalendar } from "react-icons/hi";
import { RiAwardLine } from "react-icons/ri";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index);
    };
  
    return (
    <section className="qualification section" id="qualification">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
                    <HiOutlineAcademicCap className="qualification__icon" />
                    Education
                </div>
                <div className={toggleState === 2 ? "qualification__button button--flex qualification__active" 
                    : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
                    <RiAwardLine className="qualification__icon" />
                    Courses
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>

                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">G.C.E Advance Level</h3>
                            <span className="qualification__subtitle">Piliyandala Central College</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2017-2019
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">BICT (Hons) Software Technology</h3>
                            <span className="qualification__subtitle">Faculty of Technology University of Sri Jayewardenepur</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2021 - Present
                            </div>
                        </div>
                    </div>




                </div>
                <div className={toggleState === 2 ? "qualification__content qualification__content-active"
                    : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">DIPLOMA IN INFORMATION TECHNOLOGY WITH ECOMMERCE (DITEC)</h3>
                            <span className="qualification__subtitle">Esoft Metro Campus</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2016 - 2017
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">DIPLOMA IN AutoCAD</h3>
                            <span className="qualification__subtitle">CADD Centre</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2020 - 2021
                            </div>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">React Basics</h3>
                            <span className="qualification__subtitle">Meta Front-End Developer Professional Certificate</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">Advanced React</h3>
                            <span className="qualification__subtitle">Meta Front-End Developer Professional Certificate</span>
                            <div className="qualification__calendar">
                                <HiOutlineCalendar className="qualification__calendar-icon" />
                                2024
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section> 
  );
}

export default Qualification;