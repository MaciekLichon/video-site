import React from "react";
import VideoSingle from "./VideoSinglePage/VideoSingle";

import { videosData } from "../../../data/data";

const Video: React.FC = () => {
    return (
        <VideoSingle videos={videosData} sublink="videos" />
    );
};

export default Video;