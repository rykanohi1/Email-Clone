import React from 'react';
import FolderCount from './folder-count/folder-count';
import LeftRightLayout from '../layout/left-right-layout/left-right-layout';

export default ({label, count, hasUnread, isSelected}) => (
  <LeftRightLayout
    className={`folder ${isSelected ? 'selected' : ''}`}
    children={() => [
      <span className="folder-title"> {label} </span>,
      <FolderCount hasUnread={hasUnread} count={count}/>
    ]}
  />
)