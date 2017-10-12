import React from 'react';

<<<<<<< HEAD

export default ({imgSrc, action, label, popup}) => (
  <div>
    <img className="action-button" src={imgSrc} onClick={action} onHover={popup}/>
    <span>{label}</span>
  </div>
)
=======
// What do I expect from my callers
export default ({imgSrc, label, title}) => {
  if(!(imgSrc || label)) {
    throw new Error('imgSrc and label cannot both be blank');
  }
  return (
    // In the case of most attributes, If the attribute is falsy, React will not render it
    <button title={title}>
      {imgSrc && <img src={imgSrc}/>}
      {label && <span>{label}</span>}
    </button>
  );
  // What does my caller expect from me?
}
>>>>>>> 5c50a66cfcc8fdfd0510b56defecf2ab512217e1
