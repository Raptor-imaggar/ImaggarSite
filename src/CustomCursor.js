import React, { useEffect, useState } from 'react';
import './index.css';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    setMousePosition({ x: clientX, y: clientY });

    const target = e.target;
    if (target.matches('.clickable')) {
      document.body.style.cursor = 'pointer';
    } else {
      document.body.style.cursor = 'auto';
    }
  };

  useEffect(() => {
    window.addEventListener('mousemove', onMouseMove);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }}
    ></div>
  );
};

export default CustomCursor;
