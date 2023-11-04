import React, { useState } from 'react';

const NotificationBar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeNotification = () => {
    setIsVisible(false);
  };

  return (
    <div className="notification-container">
      <div className={`notification-bar ${isVisible ? 'visible' : 'hidden'}`}>
        <div className="notification-content">
          <span>Notification message hereNotification message hereNotification message here</span>
          <button onClick={closeNotification}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default NotificationBar;
