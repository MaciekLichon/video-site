import './Videos.scss';
import React from 'react';

import VideoPreview from './VideoPreview/VideoPreview';
import previewImage from '../../../assets/images/palm-tree.jpg';

export interface IVideo {
  link: string;
  name: string;
  preview: string;
}

const videosData: IVideo[] = [
  {
    link: 'https://player.vimeo.com/video/482533185?background=1',
    name: 'commercial name //____[01]',
    preview: previewImage
  },
  {
    link: 'https://player.vimeo.com/video/482533185?background=1',
    name: 'commercial name //____[02]',
    preview: previewImage
  },
  {
    link: 'https://player.vimeo.com/video/482533185?background=1',
    name: 'commercial name //____[03]',
    preview: previewImage
  },
  {
    link: 'https://player.vimeo.com/video/482533185?background=1',
    name: 'commercial name //____[04]',
    preview: previewImage
  },
  {
    link: 'https://player.vimeo.com/video/482533185?background=1',
    name: 'commercial name //____[05]',
    preview: previewImage
  },
  {
    link: 'https://player.vimeo.com/video/482533185?background=1',
    name: 'commercial name //____[06]',
    preview: previewImage
  },
];



const Videos: React.FC = () => {
  return (
    <section className="videos container">
      {videosData.map(item => (
        <VideoPreview {...item}/>
      ))}
    </section>
  );
};

export default Videos;