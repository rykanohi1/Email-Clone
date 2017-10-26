// @flow
import React from 'react';
import ActionButton from './action-button';

export default ({items}) => {
    const itemType = items.map(item => typeof item);
    if(itemType !== 'object'){
        throw new Error('must provide valid items');
    }
    const toggleList = ()=>{
        const list = document.getElementById('itemList');
        if (list.style !== 'hidden-dropdown') {
            list.style = 'hidden-dropdown';
        }else {
            list.style = 'dropdown';
        }
    }
  return (
    <div>
        <ActionButton action={toggleList()}/>
        <ul id='itemList' className='dropdown'>
            {items.map(item => <li key={item.id}>{item.value}</li>)}
        </ul>
    </div>
    );
}