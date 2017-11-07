import React from 'react';

export default ({items}) => {

  if(!Array.isArray(items)) {
    throw new Error('must be an array')
  }

  items.forEach(item => {
    if(typeof item !== 'object' && !('id' in item) && !('value' in item)) {
      throw new Error('invalid object')
    }
  });

  return (
    <div>
      <ul>
        {items.map(item => <li key={item.id}>{item.value}</li>)}
      </ul>
    </div>
  );
}