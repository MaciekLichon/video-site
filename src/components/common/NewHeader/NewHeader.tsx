import "./NewHeader.scss";

import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logoDark from "../../../assets/icons/logo-dark.svg";
import { navLinksData } from "../../../data/data";

const NewHeader: React.FC = () => {
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
        <header className={`header ${location.pathname === "/" ? "onHome" : ""} ${status}`}>
            <div className="header__content container">
                <div className="header__toggle">
                    <button className="header__toggle-button" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
                <nav className="header__nav">
                    <ul className="header__nav-list">
                        {navLinksData.map((link) => (
                            <li
                                key={link.text}
                                className={`header__nav-item ${
                                    link.availableInHeader ? "header__nav-item_inHeader" : ""
                                }`}
                            >
                                <NavLink className="header__nav-link" to={link.to} onClick={closeMenu}>
                                    <p className="header__nav-link-text">{link.text}</p>
                                    <svg
                                        className="header__nav-link-icon"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 448 512"
                                    >
                                        {" "}
                                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />{" "}
                                    </svg>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Link to="/" className="header__logo" onClick={closeMenu}>
                    <img src={logoDark} alt="logo" />
                </Link>
            </div>
        </header>
    );
};

export default NewHeader;
