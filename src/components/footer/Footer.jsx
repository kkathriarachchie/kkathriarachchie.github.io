import React from 'react';
import "./footer.css";
import {FiGithub, FiLinkedin, FiInstagram, FiFacebook} from 'react-icons/fi';
import {ReactComponent as Logo}from "../../assets/img/Logo2.svg";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Kavishka Kathriarachchie</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="https://www.instagram.com/kavishka_kathriarachchie/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <FiInstagram />
                </a>
                <a href="https://www.facebook.com/kavishka.kathriarachchie" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <FiFacebook />
                </a>
                <a href="https://www.linkedin.com/in/kavishka-kathriarachchi/" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <FiLinkedin />
                </a>
                <a href="https://github.com/kkathriarachchie" className="home__social-icon" target="_blank" rel="noopener noreferrer">
                    <FiGithub />
                </a>
            </div>
            <span className="footer__copy">
                <div>
                    <Logo className="name--logo"/><br/>
                    &copy; 2024 Kavishka Kathriarachchie. All rights reserved.
                </div>
            </span>
        </div>
    </footer>
  );
}

export default Footer;