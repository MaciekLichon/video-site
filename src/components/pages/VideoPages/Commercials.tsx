import React from "react";

import { commercialsData } from "../../../data/data";
import VideosContainer from "./VideosContainer/VideosContainer";

const CommercialsPage: React.FC = () => {
    return (
        <VideosContainer videos={commercialsData} sublink="commercials" />
    );
};

export default CommercialsPage;