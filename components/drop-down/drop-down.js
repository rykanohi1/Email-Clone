// @flow
import React from 'react';

export default ({items}) => {
    const itemType = items.map(item => typeof item);
    if(itemType !== 'object'){
        throw new Error('must provide valid items');
    }
  return (
    <div>
        <ul>
            {items.map(item => <li key={item.id}>{item.value}</li>)}
        </ul>
    </div>
    );
}