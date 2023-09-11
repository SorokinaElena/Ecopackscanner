import React, { forwardRef } from 'react';
import s from './index.module.css';

const CheckboxI = forwardRef((props, ref) => {


  return (
    <div>
        <label style={{ padding: '5px 0 5px 0', color: '#2D2D2D', textAllign: 'center' }}>
            <input 
                style={{ width: '20px', height: '20px', marginRight: '10px', cursor: 'pointer' }}
                type='checkbox'
                ref={ref} 
                {...props}
            />
        {props.name}
        </label>
    </div>
    // <input {...props} ref={ref} className={s.form_input}/>
  )
})

export default CheckboxI;

// https://www.youtube.com/watch?v=nsHOA5DVHuw&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE