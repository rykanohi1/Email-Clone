import React from 'react';

// What do I expect from my callers
export default ({imgSrc, label}) => {
  if(!(imgSrc || label)) {
    throw new Error('imgSrc and label cannot both be blank');
  }
  return (
    <button>
      {imgSrc && <img src={imgSrc}/>}
      {label && <span>{label}</span>}
    </button>
  );
  // What does my caller expect from me?
}
