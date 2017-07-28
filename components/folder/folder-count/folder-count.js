import React from 'react';

export default ({hasUnread, count}) => 
    <span className={`folder-count ${hasUnread ? 'has-unread' : ''}`} >{count}</span>
