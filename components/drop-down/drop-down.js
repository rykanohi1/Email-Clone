import React from 'react';
import ActionButton from '../action-button/action-button';

export default ({items}) => {

  if(!Array.isArray(items)) {
    throw new Error('must be an array')
  }

  items.forEach(item => {
    if(typeof item !== 'object' && !('id' in item) && !('value' in item)) {
      throw new Error('invalid object')
    }
  });

    const toggleList = ()=>{
        const list = document.getElementById('itemList');
        if (list.style !== 'hidden-dropdown') {
            list.style = 'hidden-dropdown';
        }else {
            list.style = 'dropdown';
        }
    };
  return (
    <div>
        <ActionButton action={toggleList()}/>
        <ul id='itemList' className='dropdown'>
            {items.map(item => <li key={item.id}>{item.value}</li>)}
        </ul>
    </div>
  );
}