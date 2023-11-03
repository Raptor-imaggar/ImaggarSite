import React from 'react';
import { InfinitySpin } from 'react-loader-spinner'; // Import the specific spinner type you want to use
import './loding.css'
const Loading = () => {
  return (
    <div className="loading">
      <InfinitySpin color="#007bff" height={200} width={200} />
    </div>
  );
};

export default Loading;
