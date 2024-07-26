import React from 'react';

const GoogleSlidesWidget = () => {
  return (
    <div className=" p-4">
      <iframe
        src="https://docs.google.com/presentation/d/e/2PACX-1vQN6XZDTWM3HPhjanY0ty5ZUn31ElGsoVuSAPC0B7SI8cJWGFKqEd1DtGhg9rwPy9tr7K6TcBQsPH1S/embed?start=false&loop=false&delayms=3000" frameBorder="0" allowFullScreen 
        width="100%"
        height="500"
        className="rounded-lg"
      ></iframe>
    </div>
  );
};

export default GoogleSlidesWidget;
