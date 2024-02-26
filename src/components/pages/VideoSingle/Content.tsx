import React from "react";
import VideoSingle from "./VideoSinglePage/VideoSingle";

import { contentData } from "../../../data/data";

const Content: React.FC = () => {
    return (
        <VideoSingle videos={contentData} sublink="content" />
    );
};

export default Content;