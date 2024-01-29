import "./VideoPreview.scss";

import React from "react";
import { Link } from "react-router-dom";
import { IVideo } from "../../../../data/data";

const VideoPreview: React.FC<IVideo> = ({ id, name, link, preview }) => {
    return (
        <Link to={`/videos/${id}`} className="video">
            <p className="video__title">{name}</p>
            <img src={preview} alt="preview image" className="video__preview" />
            <iframe className="video__player" src={link} frameBorder="0" allowFullScreen></iframe>
        </Link>
    );
};

export default VideoPreview;
