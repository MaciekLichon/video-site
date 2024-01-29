import "./VideoPage.scss";

import React from "react";
import { useParams } from "react-router";

const VideoPage: React.FC = () => {
    const { id } = useParams();

    return (
        <section className="video-page container-big">
            <p>video {id}</p>
        </section>
    );
};

export default VideoPage;
