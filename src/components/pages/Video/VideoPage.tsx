import "./VideoPage.scss";

import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";

import { videosData } from "../../../data/data";

import iconPlay from "../../../assets/icons/player-play.svg";
import iconPause from "../../../assets/icons/player-pause.svg";
import iconMaximize from "../../../assets/icons/player-maximize.svg";
import iconMinimize from "../../../assets/icons/player-minimize.svg";
import iconMute from "../../../assets/icons/player-mute.svg";
import iconSound from "../../../assets/icons/player-sound.svg";
import iconNext from "../../../assets/icons/player-next.svg";
import iconPrevious from "../../../assets/icons/player-previous.svg";
import TransitionedPage from "../../common/TransitionedPage/TransitionedPage";
import { Link } from "react-router-dom";

const VideoPage: React.FC = () => {
    const { id } = useParams();
    const videoDetails = videosData.find((item) => item.id === id);
    const videosCount = videosData.length;

    const videoRef = useRef<HTMLVideoElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const [neighbourVideos, setNeighbourVideos] = useState({
        next: "",
        prev: "",
    });
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);

    useEffect(() => {
        if (id) {
            const numId = parseInt(id);

            if (numId === 1) {
                setNeighbourVideos({ next: `${numId + 1}`, prev: `${videosCount}` });
            } else if (numId === videosCount) {
                setNeighbourVideos({ next: "1", prev: `${numId - 1}` });
            } else {
                setNeighbourVideos({ next: `${numId + 1}`, prev: `${numId - 1}` });
            }
        }
    }, [id]);

    const playVideo = () => {
        videoRef.current?.play();
    };
    const pauseVideo = () => {
        videoRef.current?.pause();
    };

    const changePlayState = () => {
        isPlaying ? pauseVideo() : playVideo();
        setIsPlaying(!isPlaying);
    };

    const changeSize = () => {
        setIsFullScreen(!isFullScreen);
    };

    const changeVolume = () => {
        setIsMuted(!isMuted);
    };

    const leadingZeroFormatter = (value: number) => {
        return value.toString().padStart(2, "0");
    };

    const formatTime = (time: number) => {
        const seconds = Math.floor(time % 60);
        const minutes = Math.floor(time / 60) % 60;
        const hours = Math.floor(time / 3600);

        if (hours === 0) {
            return `${minutes}:${leadingZeroFormatter(seconds)}`;
        } else {
            return `${hours}:${leadingZeroFormatter(minutes)}:${leadingZeroFormatter(seconds)}`;
        }
    };

    const getVideoProgress = () => {
        return (currentTime * 100) / duration;
    };

    const updateCurrentTime = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const timelineWidth = timelineRef.current?.offsetWidth;
        const timelineXPos = timelineRef.current?.getBoundingClientRect().left;
        const mouseXPos = e.clientX;

        if (timelineXPos && timelineWidth && videoRef.current) {
            const relativeWidthPercent = (mouseXPos - timelineXPos) / timelineWidth;
            videoRef.current.currentTime = duration * relativeWidthPercent;
        }
    };

    return (
        <TransitionedPage>
            <section className="video-page">
                <div className="container-big">
                    <div className={`video-page__player ${isFullScreen ? "video-page__player_fullscreen" : ""}`}>
                        <video
                            ref={videoRef}
                            className="video-page__video"
                            // controls
                            playsInline // added to prevent default mobile players from opening
                            muted={isMuted}
                            // onClick={changePlayState} // this is going to work properly once 'controls' is removed
                            onLoadedData={(e) => setDuration(e.currentTarget.duration)}
                            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
                            onEnded={() => setIsPlaying(false)}
                        >
                            <source src={`${videoDetails?.video}#t=0.01`} type="video/mp4" />
                        </video>
                        {/* onClick={changePlayState} */}
                        <div className="video-page__video-overlay">
                            <Link
                                to={`/videos/${neighbourVideos.prev}`}
                                className="video-page__video-overlay__item video-page__video-overlay__item_left"
                            >
                                <div>PREVIOUS</div>
                            </Link>
                            <Link
                                to={`/videos/${neighbourVideos.next}`}
                                className="video-page__video-overlay__item video-page__video-overlay__item_right"
                            >
                                <div>NEXT</div>
                            </Link>
                        </div>
                        <button
                            className="video-page__button video-page__button_small video-page__button_minimize"
                            onClick={changeSize}
                        >
                            <img src={iconMinimize} alt="icon minimize" />
                        </button>
                    </div>
                </div>
                <div className="video-page__controls container">
                    <p className="video-page__controls-name">{videoDetails?.name}</p>
                    <div className="video-page__controls-buttons">
                        <div className="video-page__controls-buttons__category">
                            <button className="video-page__button video-page__button_play" onClick={changePlayState}>
                                <img src={isPlaying ? iconPause : iconPlay} alt="icon play" />
                            </button>
                            <div className="video-page__controls-duration">
                                <p className="video-page__controls-duration__current">{formatTime(currentTime)}</p>
                                <div
                                    ref={timelineRef}
                                    className="video-page__controls-duration__timeline"
                                    onClick={updateCurrentTime}
                                >
                                    <span
                                        className="video-page__controls-duration__timeline-thumb"
                                        style={{ width: `${getVideoProgress()}%` }}
                                    ></span>
                                </div>
                                <p className="video-page__controls-duration__total">{formatTime(duration)}</p>
                            </div>
                        </div>
                        <div className="video-page__controls-buttons__category">
                            <div className="video-page__controls-buttons__group">
                                <button
                                    className="video-page__button video-page__button_small button-volume"
                                    onClick={changeVolume}
                                >
                                    <img src={isMuted ? iconMute : iconSound} alt="icon volume" />
                                </button>
                                <button
                                    className="video-page__button video-page__button_small button-size"
                                    onClick={changeSize}
                                >
                                    <img src={iconMaximize} alt="icon maximize" />
                                </button>
                            </div>
                            <div className="video-page__controls-buttons__group">
                                <button className="video-page__button video-page__button_small button-previous">
                                    <img src={iconPrevious} alt="icon previous" />
                                </button>
                                <button className="video-page__button video-page__button_small button-next">
                                    <img src={iconNext} alt="icon next" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </TransitionedPage>
    );
};

export default VideoPage;
