// @flow
import React from 'react';

export default ({items}) => {

  return (
    <div>
        <ul>
            {items.map(item => <li key={item.id}>{item.value}</li>)}
        </ul>
    </div>
    );
}