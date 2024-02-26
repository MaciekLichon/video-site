import React from "react";

import { contentData } from "../../../data/data";
import VideosContainer from "./VideosContainer/VideosContainer";

const ContentPage: React.FC = () => {
    return (
        <VideosContainer videos={contentData} sublink="content" />
    );
};

export default ContentPage;