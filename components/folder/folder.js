import React from 'react';
import FolderCount from './folder-count/folder-count'

export default ({label, count, hasUnread}) => (
    <div className="folder">
        <span className="folder-title"> {label} </span>
        <FolderCount hasUnread={hasUnread} count={count}/>
    </div>
)