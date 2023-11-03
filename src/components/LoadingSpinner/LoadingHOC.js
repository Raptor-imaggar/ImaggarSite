import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const withLoading = (WrappedComponent) => {
  return function WithLoading(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      // Simulate a delay to demonstrate the loading spinner
      setTimeout(() => {
        setLoading(false); // Set loading to false after your data is loaded
      }, 2000); // Adjust the time as needed

      // Return a loading spinner until loading is false
      return loading ? <LoadingSpinner /> : <WrappedComponent {...props} />;
    }, []);

    return <>{loading ? <LoadingSpinner /> : <WrappedComponent {...props} />}</>;
  };
};

export default withLoading;
