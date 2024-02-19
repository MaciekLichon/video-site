import "./VideosContainer.scss";
import React from "react";

import VideoPreview from "../VideoPreview/VideoPreview";
import TransitionedPage from "../../../common/TransitionedPage/TransitionedPage";
import { IVideo } from "../../../../data/data";
import { IVideoSubpages } from "../../../../data/data";

interface IProps extends IVideoSubpages {
    videos: IVideo[]
}

const VideosContainer: React.FC<IProps> = ({ sublink, videos }) => {
    return (
        <TransitionedPage>
            <section className="videos container-big">
                {videos.map((item) => (
                    <VideoPreview key={item.id} {...item} sublink={sublink} />
                ))}
            </section>
        </TransitionedPage>
    );
};

export default VideosContainer;
