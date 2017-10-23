import React from 'react';

export default ({items}) => {
    return (
    <div>
        <ul>
            {items.map(function(itemValue){
                return <li>{itemValue}</li>
            })}
        </ul>
    </div>
    );
}