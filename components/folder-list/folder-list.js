import React from 'react';
import styles from './folder-count.scss';
import Folder from '../folder/folder';

export default ({folders}) => {
    return (<div className="folder-list">
        {folders.map(folder => <Folder
            key={folder.id} 
            label={folder.label} 
            count={folder.count} 
            has-unread={folder.hasUnread}/>
        )}
    </div>)
}