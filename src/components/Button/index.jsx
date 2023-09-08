import React from 'react';
import s from './index.module.css';

export default function Button( {children, color, name, ...props} ) {

  return (
    <button className={[s.btn, s[color]].join(' ')} {...props}>
        { children }
    </button>
  )
}



