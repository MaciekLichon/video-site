import "./VideoPreview.scss";

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IVideo } from "../../../../data/data";

const VideoPreview: React.FC<IVideo> = ({ id, name, link, preview, video }) => {
    const playerRef = useRef<HTMLVideoElement>(null);

    const playVideo = () => {
        playerRef.current?.play();
    };

    const pauseVideo = () => {
        playerRef.current?.pause();
    };

    return (
        <Link to={`/videos/${id}`} className="video" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            <p className="video__title">{name}</p>
            <img src={preview} alt="preview image" className="video__preview" />
            <video className="video__player" ref={playerRef} poster={preview} muted loop>
                <source src={video} type="video/mp4" />
            </video>
            {/* <iframe className="video__player" src={link} frameBorder="0" allowFullScreen></iframe> */}
        </Link>
    );
};

export default VideoPreview;
