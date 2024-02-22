import React from "react";
import { FiInstagram, FiGithub, FiLinkedin, FiFacebook} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
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
    );
}

export default Social;