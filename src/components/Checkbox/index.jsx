import React, { forwardRef } from 'react'; 
import s from './index.module.css';

const Checkbox = forwardRef(({ label, name, value, onChange, defaultChecked, ...rest}, ref, checked) => {


      return (
        <div className={s.checkbox_container} style={{ cursor: "pointer" }}>
          <input
            style={{ display: "none" }}
            ref={ref}
            type="checkbox"
            name={name}
            value={value}
            checked={checked}
            // label={label}
            // onChange={e => {
            //   setChecked(e.target.checked);
            // }}
          />
          [{checked ? "X" : " "}]{label}
        </div>
      );
    }
  );

  export default Checkbox;

//   https://codesandbox.io/s/react-hook-form-custom-checkbox-yncp5?file=/src/App.js:678-749