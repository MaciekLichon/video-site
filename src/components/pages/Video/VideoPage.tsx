import "./VideoPage.scss";

import React, { useState, useRef } from "react";
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

const VideoPage: React.FC = () => {
    const { id } = useParams();
    const videoDetails = videosData.find((item) => item.id === id);

    const videoRef = useRef<HTMLVideoElement>(null);

    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [duration, setDuration] = useState("");
    const [currentTime, setCurrentTime] = useState("");

    const playVideo = () => {
        videoRef.current?.play();
    };
    const pauseVideo = () => {
        videoRef.current?.pause();
    };

    const handlePlayState = () => {
        isPlaying ? pauseVideo() : playVideo();
        setIsPlaying(!isPlaying);
    };

    const handleSizeState = () => {
        setIsFullScreen(!isFullScreen);
    };

    const handleVolumeState = () => {
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

    const setInitialTimestamps = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        const totalDuration = formatTime(e.currentTarget.duration);
        console.log(totalDuration.length);

        let initialTime = "";
        for (let i = 0; i < totalDuration.length; i++) {
            if (i === 2 || i == 5) {
                initialTime = ":" + initialTime;
            } else {
                initialTime = "0" + initialTime;
            }
        }
        setCurrentTime(initialTime);
        setDuration(totalDuration);
    };

    return (
        <section className="video-page">
            <div className="container-big">
                <div className={`video-page__player ${isFullScreen ? "video-page__player_fullscreen" : ""}`}>
                    <video
                        ref={videoRef}
                        className="video-page__video"
                        controls
                        muted={isMuted}
                        onClick={handlePlayState}
                        onLoadedData={setInitialTimestamps}
                        onTimeUpdate={(e) => setCurrentTime(formatTime(e.currentTarget.currentTime))}
                        onEnded={() => setIsPlaying(false)} // this is going to work properly once 'controls' is removed
                    >
                        <source src={videoDetails?.video} type="video/mp4" />
                    </video>
                    <button
                        className="video-page__button video-page__button_small video-page__button_minimize"
                        onClick={handleSizeState}
                    >
                        <img src={iconMinimize} alt="icon minimize" />
                    </button>
                </div>
            </div>
            <div className="video-page__controls container">
                <p className="video-page__controls-name">{videoDetails?.name}</p>
                <div className="video-page__controls-buttons">
                    <button className="video-page__button button-play" onClick={handlePlayState}>
                        <img src={isPlaying ? iconPause : iconPlay} alt="icon play" />
                    </button>
                    <div className="video-page__controls-duration">
                        <p className="video-page__controls-duration__current">{currentTime}</p>
                        <p className="video-page__controls-duration__total">{duration}</p>
                    </div>
                    <div className="video-page__controls-buttons__group">
                        <button
                            className="video-page__button video-page__button_small button-volume"
                            onClick={handleVolumeState}
                        >
                            <img src={isMuted ? iconMute : iconSound} alt="icon volume" />
                        </button>
                        <button
                            className="video-page__button video-page__button_small button-size"
                            onClick={handleSizeState}
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
        </section>
    );
};

export default VideoPage;
