import React, { useState, useEffect } from 'react';
import Logo from './chat.png';
import './chatbot.css';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  useEffect(() => {
    const chatbox = document.querySelector('.chatbox__messages');
    if (chatbox) {
      chatbox.style.display = isChatboxOpen ? 'block' : 'none';
    }
  }, [isChatboxOpen]);

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
      <div
        className="chatbox__messages"
        style={{ display: isChatboxOpen ? 'block' : 'none' }}
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`messages__item ${
              msg.name === 'User' ? 'messages__item--visitor' : 'messages__item--operator'
            }`}
          >
            {msg.message}
          </div>
        ))}
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
      </div>
    <button className="bottom-right-button">     <img
        style={{"height" : "80px"}}
        src={Logo}
        alt="Jones"
        onClick={toggleChatbox}
      /></button>
 
    </div>
  );
};

export default Chatbox;
