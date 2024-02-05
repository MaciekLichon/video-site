import "./Videos.scss";
import React from "react";

import VideoPreview from "./VideoPreview/VideoPreview";

import { videosData } from "../../../data/data";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";

const Videos: React.FC = () => {
    return (
        <TransitionedPage>
            <section className="videos container-big">
                {videosData.map((item) => (
                    <VideoPreview key={item.id} {...item} />
                ))}
            </section>
        </TransitionedPage>
    );
};

export default Videos;
