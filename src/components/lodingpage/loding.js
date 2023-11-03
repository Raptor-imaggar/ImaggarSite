// Loading.js
import React from 'react';
import { SunspotLoader } from 'react-awesome-loaders';

const Loading = () => {
  return (
    <div className="loading-container">
      <SunspotLoader
        gradientColors={["#6366F1", "#E0E7FF"]}
        shadowColor={"#3730A3"}
        desktopSize={"128px"}
        mobileSize={"100px"}
      />
    </div>
  );
};

export default Loading;
