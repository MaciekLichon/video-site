import "./Header.scss";

import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "../../../assets/icons/logo-dark.svg";

const Header: React.FC = () => {
    const [status, setStatus] = useState<"closed" | "opening" | "closing" | "open">("closed");
    const location = useLocation();

    const toggleMenu = () => {
        if (status === "closed") {
            setStatus("opening");
            setTimeout(() => {
                setStatus("open");
            }, 300);
        } else if (status === "open") {
            setStatus("closing");
            setTimeout(() => {
                setStatus("closed");
            }, 300);
        }
    };

    const closeMenu = () => {
        if (status === "open") {
            setStatus("closing");
            setTimeout(() => {
                setStatus("closed");
            }, 300);
        }
    };

    return (
        <header className={`header ${location.pathname === "/" ? "header_home" : ""} ${status}`}>
            <div className="header__content container">
                <div className="header__toggle">
                    <button className="header__toggle-button" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <Link to="/" className="header__toggle-logo" onClick={closeMenu}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        <li
                            className={`header__nav-item ${
                                location.pathname === "/" ? "header__nav-item_optional" : ""
                            }`}
                        >
                            <NavLink className="header__nav-link" to="/videos" onClick={closeMenu}>
                                <p className="header__nav-link-text">Works</p>
                                <svg className="header__nav-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li
                            className={`header__nav-item ${
                                location.pathname === "/" ? "header__nav-item_optional" : ""
                            }`}
                        >
                            <NavLink className="header__nav-link" to="/people" onClick={closeMenu}>
                                <p className="header__nav-link-text">Squad</p>
                                <svg className="header__nav-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li
                            className={`header__nav-item ${
                                location.pathname === "/" ? "header__nav-item_optional" : ""
                            }`}
                        >
                            <NavLink className="header__nav-link" to="/contact" onClick={closeMenu}>
                                <p className="header__nav-link-text">Contact</p>
                                <svg className="header__nav-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="header__nav-item header__nav-item_optional">
                            <NavLink className="header__nav-link" to="/awards" onClick={closeMenu}>
                                <p className="header__nav-link-text">Awards</p>
                                <svg className="header__nav-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </NavLink>
                        </li>
                        <li className="header__nav-item header__nav-item_optional">
                            <NavLink className="header__nav-link" to="/about" onClick={closeMenu}>
                                <p className="header__nav-link-text">About</p>
                                <svg className="header__nav-link-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                    <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                                </svg>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
