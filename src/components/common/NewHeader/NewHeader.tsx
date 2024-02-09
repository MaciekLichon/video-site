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
                                        viewBox="0 0 16.328 16.328"
                                    >
                                        <path
                                            fill="rgba(77, 77, 77, 1)"
                                            d="M13.607,0H7.484a.68.68,0,0,0,0,1.361h6.123a1.372,1.372,0,0,1,.352.046L.2,15.167a.68.68,0,1,0,.962.962l13.76-13.76a1.368,1.368,0,0,1,.046.352V8.844a.68.68,0,0,0,1.361,0V2.721A2.724,2.724,0,0,0,13.607,0Z"
                                            transform="translate(0)"
                                        />
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
