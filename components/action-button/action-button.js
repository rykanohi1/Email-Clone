import React from 'react';

export default ({imgSrc, label}) => (
  <button>
    {imgSrc && <img src={imgSrc}/>}
    <span>{label}</span>
  </button>
)
