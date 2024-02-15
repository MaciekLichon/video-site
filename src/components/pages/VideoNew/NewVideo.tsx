import "./NewVideo.scss";
import React, { useState, useEffect, useRef } from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { videosData } from "../../../data/data";

const NewVideo: React.FC = () => {
    const { id } = useParams();
    const videoDetails = videosData.find((item) => item.id === id);
    const videosCount = videosData.length;

    const videoRef = useRef<HTMLVideoElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const [neighbourVideos, setNeighbourVideos] = useState({ next: "", prev: "" });
    const [time, setTime] = useState({ current: 0, duration: 0 });
    const [videoStates, setVideoStates] = useState({ isPlaying: false, isFullScreen: false, isMuted: false });

    // --- update "nav" links asap ---
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

    // --- update video states ---
    const playVideo = () => {
        videoRef.current?.play();
    };
    const pauseVideo = () => {
        videoRef.current?.pause();
    };

    const updateVideoState = (property: "isPlaying" | "isFullScreen" | "isMuted") => {
        setVideoStates({ ...videoStates, [property]: !videoStates[property] });
    };
    const changePlayState = () => {
        videoStates.isPlaying ? pauseVideo() : playVideo();
        updateVideoState("isPlaying");
    };
    const changeSizeState = () => {
        updateVideoState("isFullScreen");
    };
    const changeVolumeState = () => {
        updateVideoState("isMuted");
    };

    // --- update time counters ---
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
        return (time.current * 100) / time.duration;
    };

    // --- update time on timeline click ---
    const updateCurrentTime = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const timelineWidth = timelineRef.current?.offsetWidth;
        const timelineXPos = timelineRef.current?.getBoundingClientRect().left;
        const mouseXPos = e.clientX;

        if (timelineXPos && timelineWidth && videoRef.current) {
            const relativeWidthPercent = (mouseXPos - timelineXPos) / timelineWidth;
            videoRef.current.currentTime = time.duration * relativeWidthPercent;
        }
    };

    // video events handler
    const handleVideoEvent = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
        switch (e.type) {
            case "loadeddata":
                setTime({ ...time, duration: e.currentTarget.duration });
                break;
            case "timeupdate":
                setTime({ ...time, current: e.currentTarget.currentTime });
                break;
            case "ended":
                updateVideoState("isPlaying");
                break;
        }
    };

    return (
        <section className="vid">
            <div className="vid__screen">
                <div className="container-big">
                    <div className="vid__screen-content">
                        <video
                            className="vid__screen-video"
                            ref={videoRef}
                            playsInline
                            muted={videoStates.isMuted}
                            onLoadedData={handleVideoEvent}
                            onTimeUpdate={handleVideoEvent}
                            onEnded={handleVideoEvent}
                        >
                            <source src={`${videoDetails?.video}#t=0.01`} type="video/mp4" />
                        </video>
                        <div className="vid__screen-overlay">
                            <div className="vid__screen-overlay__side">
                                <Link className="vid__screen-overlay__side-fill" to={`/videos/${neighbourVideos.prev}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.469 39.859">
                                        {" "}
                                        <path
                                            d="M937.393,368.238V405.96a1.072,1.072,0,0,0,1.068,1.069h4.27a1.073,1.073,0,0,0,1.068-1.069V390.266l17.39,16.1a2.85,2.85,0,0,0,4.673-2.188V370.017a2.85,2.85,0,0,0-4.671-2.189l-17.389,16V368.238a1.072,1.072,0,0,0-1.069-1.068h-4.27A1.071,1.071,0,0,0,937.393,368.238Z"
                                            transform="translate(-937.393 -367.17)"
                                        />{" "}
                                    </svg>
                                </Link>
                            </div>
                            <div className="vid__screen-overlay__middle">
                                <p style={{ color: "white", fontSize: "50px" }}>ROTATE</p>
                            </div>
                            <div className="vid__screen-overlay__side">
                                <Link className="vid__screen-overlay__side-fill" to={`/videos/${neighbourVideos.next}`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.469 39.859">
                                        {" "}
                                        <path
                                            d="M937.393,368.238V405.96a1.072,1.072,0,0,0,1.068,1.069h4.27a1.073,1.073,0,0,0,1.068-1.069V390.266l17.39,16.1a2.85,2.85,0,0,0,4.673-2.188V370.017a2.85,2.85,0,0,0-4.671-2.189l-17.389,16V368.238a1.072,1.072,0,0,0-1.069-1.068h-4.27A1.071,1.071,0,0,0,937.393,368.238Z"
                                            transform="translate(-937.393 -367.17)"
                                        />{" "}
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vid__controls">
                <div className="container">
                    <div className="vid__controls-content">
                        <p className="vid__controls-name">{videoDetails?.name}</p>
                        <div className="vid__controls-buttons">
                            <button
                                className="vid__controls-button vid__controls-button_play"
                                onClick={changePlayState}
                            >
                                {videoStates.isPlaying ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 41 41">
                                        {" "}
                                        <g transform="translate(-1072 -991)">
                                            {" "}
                                            <g transform="translate(1071 999.57)">
                                                {" "}
                                                <rect
                                                    width="0.72"
                                                    height="19.394"
                                                    transform="translate(17 2.43)"
                                                />{" "}
                                                <rect width="0.72" height="19.394" transform="translate(24.996 2.43)" />{" "}
                                            </g>{" "}
                                            <g strokeWidth="0.5" fill="none" transform="translate(1072 991)">
                                                {" "}
                                                <circle stroke="none" cx="20.5" cy="20.5" r="20.5" />{" "}
                                                <circle fill="none" cx="20.5" cy="20.5" r="20.25" />{" "}
                                            </g>{" "}
                                        </g>{" "}
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        {" "}
                                        <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />{" "}
                                    </svg>
                                )}
                            </button>
                            <div className="vid__controls-duration">
                                <p className="vid__controls-duration__time">{formatTime(time.current)}</p>
                                <div
                                    className="vid__controls-duration__timeline"
                                    ref={timelineRef}
                                    onClick={updateCurrentTime}
                                >
                                    <span
                                        className="vid__controls-duration__timeline-thumb"
                                        style={{ width: `${getVideoProgress()}%` }}
                                    ></span>
                                </div>
                                <p className="vid__controls-duration__time">{formatTime(time.duration)}</p>
                            </div>
                            <button
                                className="vid__controls-button vid__controls-button_sound"
                                onClick={changeVolumeState}
                            >
                                {videoStates.isMuted ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                                        <path d="M533.6 32.5C598.5 85.2 640 165.8 640 256s-41.5 170.7-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18.564 18.543">
                                        {" "}
                                        <path
                                            id="volume-mute"
                                            fill="rgba(77, 77, 77, 1)"
                                            d="M18.451,11.7a.387.387,0,0,1-.547.546L15.473,9.82l-2.431,2.431A.387.387,0,0,1,12.5,11.7l2.431-2.431L12.5,6.843a.386.386,0,0,1,.546-.546l2.431,2.431L17.9,6.3a.386.386,0,0,1,.546.546L16.018,9.273,18.449,11.7ZM10.818,1.326V17.232A1.316,1.316,0,0,1,9.5,18.549a1.3,1.3,0,0,1-.451-.08,10.976,10.976,0,0,1-4.667-3.619l-.116-.161-.792,0A3.487,3.487,0,0,1,0,11.2V7.346A3.476,3.476,0,0,1,3.476,3.869h.005l.787,0,.115-.16A10.7,10.7,0,0,1,9.087.08a1.271,1.271,0,0,1,1.169.164,1.328,1.328,0,0,1,.563,1.083Zm-.773,0A.554.554,0,0,0,9.81.875.5.5,0,0,0,9.346.808,9.865,9.865,0,0,0,5.011,4.164l-.231.321a.388.388,0,0,1-.314.161h0l-.984,0h0a2.7,2.7,0,0,0-2.7,2.7v3.859a2.713,2.713,0,0,0,2.705,2.709l.99,0a.386.386,0,0,1,.312.161l.231.321a10.3,10.3,0,0,0,4.307,3.346.542.542,0,0,0,.727-.511V1.326Z"
                                            transform="translate(0 -0.005)"
                                        />{" "}
                                    </svg>
                                )}
                            </button>
                            <button
                                className="vid__controls-button vid__controls-button_window"
                                onClick={changeSizeState}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.996 17.996">
                                    {" "}
                                    <path d="M18,6V1.5A1.5,1.5,0,0,0,16.5,0H12V.75h4.5a.7.7,0,0,1,.069.014L8.939,8.39,1.332.784A.735.735,0,0,1,1.5.75H6V0H1.5A1.5,1.5,0,0,0,0,1.5V6H.75V1.5a.7.7,0,0,1,.04-.2L8.409,8.92.764,16.565A.7.7,0,0,1,.75,16.5V12H0v4.5A1.5,1.5,0,0,0,1.5,18H6v-.75H1.5a.743.743,0,0,1-.295-.061L8.939,9.451l7.756,7.756a.731.731,0,0,1-.2.04H12V18h4.5A1.5,1.5,0,0,0,18,16.5V12h-.75v4.5a.735.735,0,0,1-.034.167L9.469,8.92,17.185,1.2a.746.746,0,0,1,.061.295V6Z" />{" "}
                                </svg>
                            </button>
                            <Link
                                className="vid__controls-button vid__controls-button_previous"
                                to={`/videos/${neighbourVideos.prev}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.406 17.544">
                                    {" "}
                                    <path
                                        d="M8.809,8.771a1.814,1.814,0,0,1,.533-1.29L16.589.109a.365.365,0,1,1,.521.512L9.861,8a1.1,1.1,0,0,0,0,1.552l7.246,7.373a.366.366,0,0,1-.521.513l-7.244-7.37a1.816,1.816,0,0,1-.535-1.292Z"
                                        transform="translate(-8.809 0.001)"
                                    />{" "}
                                </svg>
                            </Link>
                            <Link
                                className="vid__controls-button vid__controls-button_next"
                                to={`/videos/${neighbourVideos.next}`}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.716 18.544">
                                    {" "}
                                    <path
                                        d="M17.215,8.771a2.542,2.542,0,0,1-.749,1.809L9.675,17.435a.365.365,0,1,1-.519-.515l6.792-6.856a1.827,1.827,0,0,0,0-2.585L9.156.623A.365.365,0,1,1,9.675.108l6.792,6.856A2.538,2.538,0,0,1,17.215,8.771Zm-7.31,0a1.814,1.814,0,0,0-.533-1.29L2.126.109A.365.365,0,1,0,1.6.621L8.853,8a1.1,1.1,0,0,1,0,1.552L1.605,16.921a.366.366,0,0,0,.521.513l7.245-7.37a1.816,1.816,0,0,0,.535-1.292Z"
                                        transform="translate(-0.999 0.501)"
                                    />{" "}
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewVideo;
