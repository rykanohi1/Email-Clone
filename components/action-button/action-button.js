import React from 'react';


export default ({imgSrc, label}) => (
  <button>
    <img src={imgSrc}/>
    <span>{label}</span>
  </button>
)
