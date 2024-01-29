import "./Videos.scss";
import React from "react";

import VideoPreview from "./VideoPreview/VideoPreview";

import { videosData } from "../../../data/data";

const Videos: React.FC = () => {
    return (
        <section className="videos container-big">
            {videosData.map((item) => (
                <VideoPreview key={item.id} {...item} />
            ))}
        </section>
    );
};

export default Videos;
