import React, {useState} from 'react';
import {HiOutlineArrowSmRight, HiX} from "react-icons/hi";
import './projects-show.css';
import { BiLink } from "react-icons/bi";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const ProjectItems = ({item}) => {

    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
        <div className="project__card" key={item.id}>
            <img className="project__img" src={item.image} alt="" />
            <h3 className="project__title">{item.title}</h3>
            <span className="services__button" onClick={() => toggleTab(1)}>
                    Read More
                    <HiOutlineArrowSmRight className="services__button-icon" />
                </span>
            <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                <div className="services__modal-content">
                    <HiX onClick={() => toggleTab(0)} className="services__modal-close" />
                    <h3 className="services__modal-title">{item.title}</h3>
                    <p className="services__modal-description">
                        {item.description}
                    </p>
                    <ul className="services__modal-services grid">
                        <li className="services__modal-service">
                            <FaRegArrowAltCircleRight className="services__modal-icon" />
                            <p className="services__modal-info">
                                {item.stack}
                            </p>
                        </li>
                        <li className="services__modal-service">
                            <BiLink className="services__modal-icon" />
                            <p className="services__modal-info">
                                <a href={item.plink} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-color)'}} > Project File </a>
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProjectItems;