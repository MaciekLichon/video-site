import './NewAward.scss';

import React, {useRef} from 'react';
import { INewAward } from '../../../../data/data';


const NewAward: React.FC<INewAward> = ({award, event, commentOne, commentTwo, video}) => {
    const playerRef = useRef<HTMLVideoElement>(null);

    const playVideo = () => {
        playerRef.current?.play();
    };

    const pauseVideo = () => {
        playerRef.current?.pause();
    };

    return (
        <div className="award" onMouseEnter={playVideo} onMouseLeave={pauseVideo}>
            <div className={`award__circle ${award.toLowerCase()}`}>
                <video className="award__circle-video" ref={playerRef} muted loop playsInline>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <div className="award__details">
                <h3 className="award__trophy">{award}</h3>
                <p className="award__event">{event}</p>
                <p className="award__title">{commentOne}</p>
                <p className="award__comment">{commentTwo}</p>
            </div>
        </div>
    );
};

export default NewAward;