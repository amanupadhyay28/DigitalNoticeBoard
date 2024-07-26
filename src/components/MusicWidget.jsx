import React from 'react';

const MusicWidget = () => {
  return (
    <div className=" p-4">
      <iframe
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXcBWIGoYBM5M"
        width="100%"
        height="400px"
        frameBorder="0"
        allowtransparency="true"
        allow="encrypted-media"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default MusicWidget;
