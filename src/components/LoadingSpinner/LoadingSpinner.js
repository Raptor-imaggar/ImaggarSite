import React from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import './loding.css'; // Import a separate CSS file for styling

const Loading = () => {
  return (
    <div className="loading">
      <div className="loading-overlay"></div> {/* Overlay for the blur effect */}
      <div className="loading-spinner">
        <InfinitySpin color="#007bff" height={200} width={200} />
      </div>
    </div>
  );
};

export default Loading;
