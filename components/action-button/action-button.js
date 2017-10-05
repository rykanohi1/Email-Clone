import React from 'react';


export default ({imgSrc, action, label, popup}) => (
  <div>
    <img className="action-button" src={imgSrc} onClick={action} onHover={popup}/>
    <span>{label}</span>
  </div>
)
