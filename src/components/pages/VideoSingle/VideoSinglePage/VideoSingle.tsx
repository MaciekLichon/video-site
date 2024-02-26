import "./VideoSingle.scss";
import React, { useState, useEffect, useRef } from "react";

import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { IVideo, IVideoSubpages } from "../../../../data/data";
import TransitionedPage from "../../../common/TransitionedPage/TransitionedPage";

interface IProps extends IVideoSubpages {
    videos: IVideo[];
}

const VideoSingle: React.FC<IProps> = ({ videos, sublink }) => {
    const { id } = useParams();
    const videoDetails = videos.find((item) => item.id === id);
    const videosCount = videos.length;

    const videoRef = useRef<HTMLVideoElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const [neighbourVideos, setNeighbourVideos] = useState({ next: "", prev: "" });
    const [time, setTime] = useState({ current: 0, duration: 0 });
    const [videoStates, setVideoStates] = useState({ isPlaying: false, isFullScreen: false, isMuted: false });
    const [isMobileOverlayVisible, setIsMobileOverlayVisible] = useState(false); // controls showing title on mobile

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
            case "click": 
                // works in fullscren mode only because the overlay is hidden, if is present just in case
                // overlay click (for minimized screen) is handled separately (inline)
                if (videoStates.isFullScreen) {
                    changePlayState();
                }
                break;
        }
    };

    return (
        <TransitionedPage>
            <section className={`vid ${videoStates.isFullScreen ? "vid_fullsize" : ""}`}>
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
                                onClick={handleVideoEvent}
                            >
                                <source src={`${videoDetails?.video}#t=0.01`} type="video/mp4" />
                            </video>
                            <div
                                className={`vid__screen-overlay ${
                                    isMobileOverlayVisible ? "vid__screen-overlay_mobile" : ""
                                }`}
                                onClick={() => changePlayState()}
                            >
                                <div className="vid__screen-overlay__side left">
                                    <div className="vid__screen-overlay__side-fill">
                                        <Link 
                                            className="vid__screen-overlay__side-smalllink" 
                                            to={`/${sublink}/`} 
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            Close
                                        </Link>
                                        <Link
                                            className="vid__screen-overlay__side-videolink"
                                            to={`/${sublink}/${neighbourVideos.prev}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.469 39.859"> {" "} <path d="M937.393,368.238V405.96a1.072,1.072,0,0,0,1.068,1.069h4.27a1.073,1.073,0,0,0,1.068-1.069V390.266l17.39,16.1a2.85,2.85,0,0,0,4.673-2.188V370.017a2.85,2.85,0,0,0-4.671-2.189l-17.389,16V368.238a1.072,1.072,0,0,0-1.069-1.068h-4.27A1.071,1.071,0,0,0,937.393,368.238Z" transform="translate(-937.393 -367.17)" />{" "} </svg>
                                        </Link>
                                        <p className="vid__screen-overlay__side-title">{videoDetails?.name}</p>
                                    </div>
                                </div>
                                <div className="vid__screen-overlay__middle">

                                </div>
                                <div className="vid__screen-overlay__side right">
                                    <div className="vid__screen-overlay__side-fill">
                                        <button
                                            className="vid__screen-overlay__side-smalllink"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsMobileOverlayVisible(!isMobileOverlayVisible);
                                            }}
                                        >
                                            Info
                                        </button>
                                        <Link
                                            className="vid__screen-overlay__side-videolink"
                                            to={`/${sublink}/${neighbourVideos.next}`}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28.469 39.859"> {" "} <path d="M937.393,368.238V405.96a1.072,1.072,0,0,0,1.068,1.069h4.27a1.073,1.073,0,0,0,1.068-1.069V390.266l17.39,16.1a2.85,2.85,0,0,0,4.673-2.188V370.017a2.85,2.85,0,0,0-4.671-2.189l-17.389,16V368.238a1.072,1.072,0,0,0-1.069-1.068h-4.27A1.071,1.071,0,0,0,937.393,368.238Z" transform="translate(-937.393 -367.17)" />{" "} </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`vid__controls ${isMobileOverlayVisible ? "vid__controls_hidden" : ""} ${videoStates.isPlaying ? "vid__controls_fade" : ""}`}>
                    <div className="container">
                        <div className="vid__controls-content">
                            <p className="vid__controls-name">{videoDetails?.name}</p>
                            <div className="vid__controls-buttons">
                                <button
                                    className="vid__controls-button vid__controls-button_play"
                                    onClick={changePlayState}
                                >
                                    {videoStates.isPlaying ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"> <g transform="translate(-95 -85)"> <g transform="translate(94.969 84.969)"> <g transform="translate(0.031 0.031)" fill="none" stroke="rgba(77, 77, 77, 1)" stroke-width="4" > <circle cx="64.5" cy="64.5" r="64.5" stroke="none" /> <circle cx="64.5" cy="64.5" r="62.5" fill="none" /> </g> </g> <g transform="translate(147 123)"> <rect width="1.989" height="53.605" transform="translate(0 0)" fill="rgba(77, 77, 77, 1)" stroke="rgba(77, 77, 77, 1)" stroke-linecap="round" stroke-width="1" /> <rect id="Rectangle_10" data-name="Rectangle 10" width="1.989" height="53.605" transform="translate(22.1 0)" fill="rgba(77, 77, 77, 1)" stroke="rgba(77, 77, 77, 1)" stroke-linecap="round" stroke-width="1" /> </g> </g> </svg>
                                        ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129"> <g transform="translate(-94 -85)"> <g transform="translate(93.969 84.969)"> <g transform="translate(0.031 0.031)" fill="none" stroke="rgba(77, 77, 77, 1)" stroke-width="4" > <circle cx="64.5" cy="64.5" r="64.5" stroke="none" /> <circle cx="64.5" cy="64.5" r="62.5" fill="none" /> </g> </g> <g transform="translate(186.474 119.233) rotate(90)" fill=""> <path className="nofill" d="M 56.6093864440918 39.67949676513672 L 3.924065589904785 39.67949676513672 C 3.924075126647949 39.67949295043945 3.924072027206421 39.67948913574219 3.92406964302063 39.67948150634766 L 30.26672554016113 3.4037184715271 L 30.26708602905273 3.404218673706055 L 56.6093864440918 39.67948913574219 C 56.609375 39.67948532104492 56.60937118530273 39.67949295043945 56.60936737060547 39.67949676513672 L 56.6093864440918 39.67949676513672 Z" stroke="none" /> <path d="M 30.26672744750977 6.807449340820312 L 7.848125457763672 37.67949295043945 L 52.68532562255859 37.67949295043945 L 30.26672744750977 6.807449340820312 M 30.26672554016113 1.403720855712891 C 30.87622833251953 1.403720855712891 31.48573112487793 1.678661346435547 31.88503646850586 2.228538513183594 L 58.22770309448242 38.50430679321289 C 59.18778228759766 39.8264045715332 58.24330139160156 41.67948150634766 56.60938262939453 41.67949295043945 L 3.924057006835938 41.67949295043945 C 2.290145874023438 41.67948150634766 1.345668792724609 39.8264045715332 2.305747985839844 38.50430679321289 L 28.64841461181641 2.228538513183594 C 29.04771995544434 1.678661346435547 29.65722274780273 1.403720855712891 30.26672554016113 1.403720855712891 Z" stroke="none" fill="rgba(77, 77, 77, 1)" /> </g> </g> </svg>
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
                                        <svg xmlns="http://www.w3.org/2000/svg" width="120.443" height="120.309" viewBox="0 0 120.443 120.309" > <path id="volume-mute" d="M119.709,75.907a2.508,2.508,0,0,1-3.549,3.544L100.389,63.68,84.617,79.452a2.508,2.508,0,0,1-3.549-3.544L96.839,60.136,81.068,44.365a2.506,2.506,0,0,1,3.544-3.544l15.771,15.771L116.155,40.82a2.506,2.506,0,0,1,3.544,3.544L103.928,60.136,119.7,75.907ZM70.184,8.576v103.2a8.537,8.537,0,0,1-8.532,8.542,8.428,8.428,0,0,1-2.928-.521c-10.843-3.98-23.01-13.415-30.28-23.482l-.752-1.043-5.138-.015A22.624,22.624,0,0,1,0,72.664V47.628A22.55,22.55,0,0,1,22.554,25.069h.035l5.1.015.747-1.038C35.949,13.659,47.926,4.4,58.955.489A8.245,8.245,0,0,1,66.54,1.552a8.616,8.616,0,0,1,3.65,7.023Zm-5.013,0a3.6,3.6,0,0,0-1.524-2.928,3.27,3.27,0,0,0-3.013-.436C50.5,8.811,39.459,17.359,32.51,26.984l-1.5,2.08a2.515,2.515,0,0,1-2.035,1.043h-.005l-6.387-.015h-.025A17.544,17.544,0,0,0,5.018,47.638V72.674A17.6,17.6,0,0,0,22.569,90.25l6.422.015a2.5,2.5,0,0,1,2.025,1.043l1.5,2.08c6.627,9.179,18.118,18.1,27.943,21.712a3.514,3.514,0,0,0,4.717-3.314V8.576Z" transform="translate(0 -0.005)" fill="rgba(77, 77, 77, 1)" /> </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.734 120.099"> <g transform="translate(-96 -89.617)"> <g transform="translate(96 89.617)"> <path d="M75.072,8.561V111.577a8.522,8.522,0,0,1-8.518,8.528,8.413,8.413,0,0,1-2.923-.52c-10.825-3.974-22.97-13.4-30.227-23.441L32.654,95.1,22.52,95.087A22.585,22.585,0,0,1,0,72.542V47.55A22.52,22.52,0,0,1,22.52,25.03h.035l10.1.015.746-1.036C40.9,13.635,52.852,4.4,63.862.488a8.228,8.228,0,0,1,7.572,1.061,8.6,8.6,0,0,1,3.643,7.011Zm-5,0a3.59,3.59,0,0,0-1.521-2.923A3.266,3.266,0,0,0,65.538,5.2C55.419,8.8,44.4,17.328,37.463,26.937l-1.5,2.077a2.725,2.725,0,0,1-2.037,1.041L22.55,30.04h-.025A17.513,17.513,0,0,0,5.009,47.555V72.547A17.571,17.571,0,0,0,22.53,90.093l11.41.015a2.479,2.479,0,0,1,2.022,1.041l1.5,2.077c6.616,9.158,18.086,18.071,27.895,21.674a3.508,3.508,0,0,0,4.709-3.308V8.561Z" transform="translate(0 -0.005)" fill="rgba(77, 77, 77, 1)" /> </g> <path d="M71.267,44.248a1.914,1.914,0,0,0,.189-2.69c-.606-.682-1.212-1.4-1.894-2.046a34.026,34.026,0,0,0-48.192,0c-.644.644-1.288,1.326-1.894,2.046a1.907,1.907,0,1,0,2.879,2.5c.53-.644,1.1-1.25,1.667-1.819a30.367,30.367,0,0,1,42.888,0c.606.606,1.137,1.212,1.667,1.819a1.827,1.827,0,0,0,1.44.644,1.956,1.956,0,0,0,1.25-.455ZM90.324,25.684a1.913,1.913,0,0,0,.152-2.69c-.682-.758-1.4-1.478-2.122-2.235A60.551,60.551,0,0,0,2.617,20.8c-.72.72-1.44,1.478-2.122,2.235a1.879,1.879,0,0,0,.152,2.69,1.913,1.913,0,0,0,2.69-.152c.644-.72,1.288-1.4,1.97-2.084a56.892,56.892,0,0,1,80.4,0c.682.682,1.326,1.364,1.97,2.084a1.877,1.877,0,0,0,1.4.644,1.744,1.744,0,0,0,1.25-.493Z" transform="translate(229.724 103.522) rotate(90)" fill="rgba(77, 77, 77, 1)" /> </g> </svg>
                                    )}
                                </button>
                                <button
                                    className="vid__controls-button vid__controls-button_window"
                                    onClick={changeSizeState}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.996 17.996"> {" "} <path d="M18,6V1.5A1.5,1.5,0,0,0,16.5,0H12V.75h4.5a.7.7,0,0,1,.069.014L8.939,8.39,1.332.784A.735.735,0,0,1,1.5.75H6V0H1.5A1.5,1.5,0,0,0,0,1.5V6H.75V1.5a.7.7,0,0,1,.04-.2L8.409,8.92.764,16.565A.7.7,0,0,1,.75,16.5V12H0v4.5A1.5,1.5,0,0,0,1.5,18H6v-.75H1.5a.743.743,0,0,1-.295-.061L8.939,9.451l7.756,7.756a.731.731,0,0,1-.2.04H12V18h4.5A1.5,1.5,0,0,0,18,16.5V12h-.75v4.5a.735.735,0,0,1-.034.167L9.469,8.92,17.185,1.2a.746.746,0,0,1,.061.295V6Z" />{" "} </svg>
                                </button>
                                <Link
                                    className="vid__controls-button vid__controls-button_previous"
                                    to={`/${sublink}/${neighbourVideos.prev}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8.406 17.544"> {" "} <path d="M8.809,8.771a1.814,1.814,0,0,1,.533-1.29L16.589.109a.365.365,0,1,1,.521.512L9.861,8a1.1,1.1,0,0,0,0,1.552l7.246,7.373a.366.366,0,0,1-.521.513l-7.244-7.37a1.816,1.816,0,0,1-.535-1.292Z" transform="translate(-8.809 0.001)" />{" "} </svg>
                                </Link>
                                <Link
                                    className="vid__controls-button vid__controls-button_next"
                                    to={`/${sublink}/${neighbourVideos.next}`}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16.716 18.544"> {" "} <path d="M17.215,8.771a2.542,2.542,0,0,1-.749,1.809L9.675,17.435a.365.365,0,1,1-.519-.515l6.792-6.856a1.827,1.827,0,0,0,0-2.585L9.156.623A.365.365,0,1,1,9.675.108l6.792,6.856A2.538,2.538,0,0,1,17.215,8.771Zm-7.31,0a1.814,1.814,0,0,0-.533-1.29L2.126.109A.365.365,0,1,0,1.6.621L8.853,8a1.1,1.1,0,0,1,0,1.552L1.605,16.921a.366.366,0,0,0,.521.513l7.245-7.37a1.816,1.816,0,0,0,.535-1.292Z" transform="translate(-0.999 0.501)" />{" "} </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </TransitionedPage>
    );
};

export default VideoSingle;
