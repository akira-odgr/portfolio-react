import Logo from "../../assets/images/logo.png";
import { RiMenu3Line } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";

import "./Header.scss";
import { useState } from "react";

export const Header = () => {
    const [menu, setMenu] = useState(false);

    return (
        <header className="header">
            <div className="header__logo">
                <a href="#">
                    <img src={Logo} alt="logo" />
                </a>
            </div>

            <div
                className={
                    !menu ? "header__menu-btn" : "header__menu-btn is-open"
                }
                onClick={() => setMenu(!menu)}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>

            <nav className={!menu ? "header__nav" : "header__nav is-open"}>
                <ul className="header__nav__links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#tours">Tours</a>
                    </li>
                    <li>
                        <a href="#contact">Contacts</a>
                    </li>
                    <li>
                        <button className="btn">
                            Plan a Trip
                            <span>
                                <FaArrowRightLong />
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
