import React, { forwardRef } from 'react'; 
import s from './index.module.css';

const CheckboxItem = forwardRef(({ label, name, value, onChange, defaultChecked, ...rest}, ref, checked) => {


      return (
        <div className={s.checkbox_container} style={{ cursor: 'pointer' }}>
          <input
            style={{ display: 'none' }} // скрываем default checkbox 
            ref={ref}
            type='checkbox'
            name={name}
            value={value}
            label={label}
            checked={checked}
            {...`${name}Register`}
            // label={label}
            // onChange={e => {
            //   setChecked(e.target.checked);
            // }}
          />
          [{checked ? 'X' : ' '}]{label}
        </div>
      );
    }
  );

  export default CheckboxItem;

  // onChange={e => {
              //   setChecked(e.target.checked);
              // }}
              // onClick={() => setChecked(!checked)}
              // checked={checked}

//   https://codesandbox.io/s/react-hook-form-custom-checkbox-yncp5?file=/src/App.js:678-749