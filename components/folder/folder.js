import React from 'react';
import FolderCount from './folder-count/folder-count'

export default ({label, count, hasUnread, isSelected}) => (
    <div className={`folder ${isSelected ? 'selected' : ''}`}>
        <span className="folder-title"> {label} </span>
        <FolderCount hasUnread={hasUnread} count={count}/>
    </div>
)