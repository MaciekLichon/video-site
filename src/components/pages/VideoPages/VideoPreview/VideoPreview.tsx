import "./VideoPreview.scss";

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { IVideo } from "../../../../data/data";
import { IVideoSubpages } from "../../../../data/data";

interface IProps extends IVideo, IVideoSubpages {}

const VideoPreview: React.FC<IProps> = ({ id, name, preview, snippet, sublink }) => {
    // link prop removed for build
    const playerRef = useRef<HTMLVideoElement>(null);

    const playVideo = () => {
        playerRef.current?.play();
    };

    const pauseVideo = () => {
        playerRef.current?.pause();
    };

    return (
        <Link to={`/${sublink}/${id}`} className="video" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            <h4 className="video__title">{name}</h4>
            {/* <img src={preview} alt="preview image" className="video__preview" /> */}
            {/* <video className="video__player" ref={playerRef} poster={preview} muted loop playsInline> */}
            <video className="video__player" ref={playerRef} muted loop playsInline>
                <source src={snippet} type="video/mp4" />
            </video>
            {/* <iframe className="video__player" src={link} frameBorder="0" allowFullScreen></iframe> */}
        </Link>
    );
};

export default VideoPreview;
