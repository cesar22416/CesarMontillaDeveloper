// VideoBackground.js
import React from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop>
        <source src="https://firebasestorage.googleapis.com/v0/b/cesar22.appspot.com/o/Logo%20%20Forma%20Rodante_free.mp4?alt=media&token=4840fa83-5198-4638-9f26-524fd28ad399" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;
