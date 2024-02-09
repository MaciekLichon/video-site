import "./Home.scss";

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import iconCalendar from "../../../assets/icons/icon-contact.svg";
import iconInfo from "../../../assets/icons-new/nav-info.svg";
import iconPeople from "../../../assets/icons-new/nav-people.svg";
import iconTrophy from "../../../assets/icons-new/nav-awards.svg";
import iconVideo from "../../../assets/icons-new/nav-videos.svg";
import logo from "../../../assets/icons/logo.svg";

import bgVideo from "../../../assets/videos/video-bg.mp4";

// interface IProps {
//     setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
// }

const Home: React.FC = () => {
    return (
        <motion.section
            className="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "linear" }}
        >
            <div className="home__video">
                {/* <iframe
                    className="home__player"
                    src="https://player.vimeo.com/video/373604133?background=1"
                    frameBorder="0"
                    allowFullScreen
                    onLoad={() => {
                        setIsLoading(false);
                    }}
                ></iframe> */}
                <video className="home__player" autoPlay muted loop playsInline>
                    <source src={bgVideo} type="video/mp4" />
                </video>
            </div>

            <div className="home__panel container">
                <div className="home__nav">
                    <Link to="/videos" className="home__nav-link">
                        <img src={iconVideo} alt="video icon" className="home__nav-icon" />
                    </Link>
                    <p className="home__nav-locations">
                        <span>Pawspiring</span>
                        <span>Whiskerized</span>
                        <span>Meowtastic</span>
                    </p>
                    <Link to="/contact" className="home__nav-link">
                        <img src={iconCalendar} alt="calendar icon" className="home__nav-icon" />
                    </Link>
                    <img src={logo} alt="logo" className="home__nav-logo" />
                    <Link to="/about" className="home__nav-link">
                        <img src={iconInfo} alt="info icon" className="home__nav-icon" />
                    </Link>
                    <Link to="/people" className="home__nav-link">
                        <img src={iconPeople} alt="people icon" className="home__nav-icon" />
                    </Link>
                    <Link to="/awards" className="home__nav-link">
                        <img src={iconTrophy} alt="trophy icon" className="home__nav-icon" />
                    </Link>
                </div>
                <div className="home__socials">
                    <a href="" className="home__socials-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.609 26.609"> {" "} <path id="Path_19" fill="white" d="M13.3,2.4c3.552,0,3.974.013,5.376.078a5.869,5.869,0,0,1,4,1.454,5.831,5.831,0,0,1,1.454,4c.064,1.4.078,1.824.078,5.376s-.013,3.974-.078,5.376a5.9,5.9,0,0,1-1.454,4,5.829,5.829,0,0,1-4,1.454c-1.4.064-1.824.078-5.376.078s-3.974-.013-5.376-.078a5.94,5.94,0,0,1-4-1.454,5.864,5.864,0,0,1-1.454-4C2.41,17.278,2.4,16.857,2.4,13.3s.013-3.974.078-5.376a5.918,5.918,0,0,1,1.454-4,5.844,5.844,0,0,1,4-1.454C9.331,2.41,9.752,2.4,13.3,2.4m0-2.4C9.691,0,9.238.016,7.819.08A8.223,8.223,0,0,0,2.233,2.233,8.209,8.209,0,0,0,.08,7.819C.016,9.238,0,9.691,0,13.3s.016,4.067.08,5.486a8.231,8.231,0,0,0,2.153,5.586,8.216,8.216,0,0,0,5.586,2.153c1.419.064,1.873.08,5.486.08s4.067-.016,5.486-.08a8.228,8.228,0,0,0,5.586-2.153,8.205,8.205,0,0,0,2.153-5.586c.064-1.419.08-1.873.08-5.486s-.016-4.067-.08-5.486a8.226,8.226,0,0,0-2.153-5.586A8.223,8.223,0,0,0,18.791.08C17.371.016,16.918,0,13.3,0Z" transform="translate(0 0)" />{" "} <path id="Path_20" fill="white" d="M6.832,0a6.832,6.832,0,1,0,6.832,6.832A6.832,6.832,0,0,0,6.832,0Zm0,11.267a4.435,4.435,0,1,1,4.435-4.435A4.435,4.435,0,0,1,6.832,11.267Z" transform="translate(6.473 6.473)" />{" "} <circle id="Ellipse_6" fill="white" cx="1.597" cy="1.597" r="1.597" transform="translate(18.811 4.606)" />{" "} </svg>
                    </a>
                    <a href="" className="home__socials-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.609 26.448"> {" "} <path fill="white" d="M26.609,13.3A13.316,13.316,0,0,1,15.378,26.449V17.176H18.47l.589-3.836H15.378V10.851A1.918,1.918,0,0,1,17.54,8.779h1.673V5.513a20.392,20.392,0,0,0-2.97-.259c-3.031,0-5.011,1.837-5.011,5.162v2.924H7.862v3.836h3.369v9.272A13.3,13.3,0,1,1,26.609,13.3Z" />{" "} </svg>
                    </a>
                    <a href="" className="home__socials-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.609 23.062"> {" "} <path fill="white" d="M26.6,5.336q-.178,3.893-5.427,10.659-5.427,7.066-9.182,7.067-2.327,0-3.936-4.3Q6.976,14.813,5.9,10.867q-1.194-4.3-2.562-4.3A8.216,8.216,0,0,0,1.253,7.819L0,6.2Q1.971,4.469,3.884,2.734,6.512.459,7.826.34q3.107-.3,3.824,4.255.775,4.914,1.075,6.11.895,4.076,1.971,4.075.835,0,2.509-2.644A10.435,10.435,0,0,0,19,8.11q.238-2.282-1.792-2.284a4.968,4.968,0,0,0-1.969.437Q17.2-.175,22.731,0,26.832.126,26.6,5.336Z" />{" "} </svg>
                    </a>
                    <a href="" className="home__socials-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.49 27.49"> {" "} <path fill="white" stroke="white" transform="translate(0.5 0.5)" d="M13.245,0a13.245,13.245,0,1,0,7.487,24.185.552.552,0,1,0-.625-.909,12.151,12.151,0,1,1,5.279-10.031V16a2.759,2.759,0,0,1-5.519,0V13.245a6.627,6.627,0,1,0-1.025,3.536A3.863,3.863,0,0,0,26.49,16V13.245A13.26,13.26,0,0,0,13.245,0Zm0,18.764a5.519,5.519,0,1,1,5.519-5.519A5.525,5.525,0,0,1,13.245,18.764Z" />{" "} </svg>
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Home;
