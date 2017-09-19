import React from 'react';
import styles from './left-right-layout.scss';

export default ({className, children}) =>
    <div className={`left-right-layout ${className}`} >
      {children()}
    </div>
