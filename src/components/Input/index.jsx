import React, { forwardRef } from 'react';
import s from './index.module.css';

const Input = forwardRef((props, ref) => {

  return (
    <input {...props} ref={ref} className={s.form_input}/>
  )
})

export default Input;