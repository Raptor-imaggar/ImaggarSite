import React, { useState } from 'react';
import './chatbot.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const onSendButton = () => {
    if (inputValue === '') {
      return;
    }

    let msg1 = { name: 'User', message: inputValue };
    // Implement the fetch logic here
    // ...

    // Update the messages state
    setMessages([...messages, msg1]);
    setInputValue('');
  };

  const toggleChatbox = () => {
    setIsChatboxOpen(!isChatboxOpen);
  };

  return (
    <div className="chatbox">
      <div className={`chatbox__messages ${isChatboxOpen ? 'open' : 'closed'}`}>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`messages__item ${
              msg.name === 'Sam' ? 'messages__item--visitor' : 'messages__item--operator'
            }`}
          >
            {msg.message}
          </div>
        ))}
      </div>
      <div className="chatbox__input">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSendButton();
            }
          }}
        />
        <button className="send__button" onClick={onSendButton}>
          Send
        </button>
      </div>

      <img
        className="bottom-right-button"
        src="./chat.png"
        alt="Jones"
        onClick={toggleChatbox}
      />

      <img
        className="bottom-right-button"
        src="src\components\general\chatbot\chat.png"
        alt="Jones2"
        onClick={toggleChatbox}
      />
    </div>
  );
};

export default Chatbox;
