import React from 'react';
import ActionButton from '../action-button/action-button';

export default ({items, isHidden, toggleDisplay}) => {

  if (!Array.isArray(items)) {
    throw new Error('must be an array')
  }

  items.forEach(item => {
    if (typeof item !== 'object' || !('id' in item) && !('value' in item)) {
      throw new Error('invalid object')
    }
  });

  return (
    <div>
      <ActionButton action={toggleDisplay()}/>
      <ul id='itemList' className={`dropdown ${isHidden}`}>
        {items.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  );
}