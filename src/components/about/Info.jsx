import React from 'react';
import { RiYoutubeLine } from "react-icons/ri";
import { IoBookSharp } from "react-icons/io5";
import { GiTeacher } from "react-icons/gi";


const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <IoBookSharp className="about__icon" />
            <h3 className="about__title">Undergraduate Student</h3>
            <span className="about__subtitle">3rd Year</span>
        </div>
        <div className="about__box">
            <GiTeacher className="about__icon" />
            <h3 className="about__title">A/L ICT Tutor</h3>
            <span className="about__subtitle">Part-time</span>
        </div>
        <div className="about__box">
            <RiYoutubeLine className="about__icon" />
            <h3 className="about__title">Content Creator</h3>
            <span className="about__subtitle">T Monsters</span>
        </div>
    </div>
  );
}

export default Info;