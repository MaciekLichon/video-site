import "./Home.scss";

import React from "react";
import { Link } from "react-router-dom";

import iconCalendar from "../../../assets/icons/icon-contact.svg";
import iconInfo from "../../../assets/icons/icon-info.svg";
import iconPeople from "../../../assets/icons/icon-people.svg";
import iconTrophy from "../../../assets/icons/icon-trophy.svg";
import iconVideo from "../../../assets/icons/icon-video.svg";
import logo from "../../../assets/icons/logo.svg";

import bgVideo from "../../../assets/videos/video-bg.mp4";

interface IProps {
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const Home: React.FC<IProps> = ({ setIsLoading }) => {
    return (
        <section className="home">
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
                <video className="home__player" autoPlay muted>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                fill="white"
                                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                            />
                        </svg>
                    </a>
                    <a href="" className="home__socials-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                fill="white"
                                d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                            />
                        </svg>
                    </a>
                    <a href="" className="home__socials-link">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <path
                                fill="white"
                                d="M447.8 153.6c-2 43.6-32.4 103.3-91.4 179.1-60.9 79.2-112.4 118.8-154.6 118.8-26.1 0-48.2-24.1-66.3-72.3C100.3 250 85.3 174.3 56.2 174.3c-3.4 0-15.1 7.1-35.2 21.1L0 168.2c51.6-45.3 100.9-95.7 131.8-98.5 34.9-3.4 56.3 20.5 64.4 71.5 28.7 181.5 41.4 208.9 93.6 126.7 18.7-29.6 28.8-52.1 30.2-67.6 4.8-45.9-35.8-42.8-63.3-31 22-72.1 64.1-107.1 126.2-105.1 45.8 1.2 67.5 31.1 64.9 89.4z"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Home;
