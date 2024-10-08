/* eslint-disable no-unused-vars */
import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/ContextProvider';

const ChatHistory = () => {
  const [extended, setExtended] = useState(false);
  const { prevPrompts, onSent, setRecentPrompt } = useContext(Context);

  const loadPrompt = async (prompt) => {
    await onSent(prompt);
    setRecentPrompt(prompt);
  };

  return (
    <div className="recent">
      <p className='recent-title'>Chat History</p>
      {Array.isArray(prevPrompts) && prevPrompts.length > 0 ? (
        prevPrompts.map((item, index) => (
          <div key={index} onClick={() => loadPrompt(item)} className="recent-entry-history">
            <img src={assets.message_icon} alt="" />
            <p>{item.slice(0, 10)} {"..."}</p>
          </div>
        ))
      ) : (
        <p>No chat history available.</p>
      )}
    </div>
  );
}

export default ChatHistory;
