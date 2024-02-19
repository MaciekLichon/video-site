import React from "react";

import { videosData } from "../../../data/data";
import VideosContainer from "./VideosContainer/VideosContainer";

const VideosPage: React.FC = () => {
    return (
        <VideosContainer videos={videosData} sublink="videos" />
    );
};

export default VideosPage;