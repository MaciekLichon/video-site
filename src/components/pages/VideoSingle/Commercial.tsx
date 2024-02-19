import React from "react";
import VideoSingle from "./VideoSinglePage/VideoSingle";

import { commercialsData } from "../../../data/data";

const Commercial: React.FC = () => {
    return (
        <VideoSingle videos={commercialsData} sublink="commercials" />
    );
};

export default Commercial;