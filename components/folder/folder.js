import React from 'react';
import FolderCount from './folder'

export default (label, count, hasUnread) => {
    <span> 
        <span> {label} </span>
        <FolderCount hasUnread={hasUnread} count={count}/>
    </span>
} 