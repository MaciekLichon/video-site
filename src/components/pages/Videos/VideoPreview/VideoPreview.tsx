import './VideoPreview.scss';

import React from 'react';
import { IVideo } from '../Videos';

const VideoPreview: React.FC<IVideo> = ({name, link, preview}) => {

  return (
    <div className="video">
      <p className="video__title">{name}</p>
      <img src={preview} alt="preview image" className="video__preview" />
      <iframe 
        className="video__player" 
        src={link} 
        frameBorder="0" 
        allowFullScreen>
      </iframe>
    </div>
  );
};

export default VideoPreview;