import "./Award.scss";

import React, { useRef } from "react";
import { IAward } from "../../../../data/data";

const Award: React.FC<IAward> = ({ award, description, title, year, video }) => {
    const playerRef = useRef<HTMLVideoElement>(null);

    const playVideo = () => {
        playerRef.current?.play();
    };

    const pauseVideo = () => {
        playerRef.current?.pause();
    };

    return (
        <div className="award" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            <h3 className="award__trophy">{award}</h3>
            <p className="award__description">{description}</p>
            <p className="award__title">{title}</p>
            <p className="award__year">{year}</p>
            <svg className="award__arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
            {/* <img src={image} alt="reward image" className="award__image" /> */}
            <video className="award__video" ref={playerRef} muted loop playsInline>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default Award;
