import React, { useState, useEffect, forwardRef, useContext } from 'react'; 
import s from './index.module.css';
import { Context } from '../../context';

const CheckboxItem = forwardRef(({ label, name, value, onChange, defaultChecked, defaultValue, ...rest}, ref ) => {
/*const CheckboxItem = forwardRef((props, ref ) => {*/

  const [checked, setChecked] = useState(defaultChecked);
  
    // useEffect(() => {
    //   if (onChange) {
    //     onChange(checked);
    //   }
    // }, [checked]);

    
      if (checked) {
        console.log('Выбран');
        console.log(checked);
      }
      else {
        console.log('Не выбран');
        console.log(checked);
      }
    
      // const f1 = () => {
      //   setChecked(!checked)
      //   console.log('pushed')
      // }

      return (
        <div className={s.checkbox_container} style={{ cursor: 'pointer' }} /*onClick={f1}*/ onClick={() => setChecked(!checked)} >
          <input
            style={{ display: 'none' }} // скрываем default checkbox 
            ref={ref} // позволяет обратиться к элементу по какому-либо идентификатору
            type='checkbox'
            name={name}
            value={value}
            checked={checked}
            // onChange={e => {
            //   setChecked(e.target.checked);
            // }}
            // {...props}
          />
          {/* [{checked ? 'X' : ' '}]{props.label} */}
          [{checked ? 'X' : ' '}]{label}
        </div>
      );
    }
  );

  export default CheckboxItem;

// https://codesandbox.io/s/react-hook-form-custom-checkbox-yncp5?file=/src/App.js:678-749
// https://react-hook-form.com/docs/useform/register#registerRef
// https://www.youtube.com/watch?v=2Sf8E9CUavA&ab_channel=TomDohnal
// https://www.youtube.com/watch?v=nsHOA5DVHuw&ab_channel=WebDev%D1%81%D0%BD%D1%83%D0%BB%D1%8F.%D0%9A%D0%B0%D0%BD%D0%B0%D0%BB%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%9B%D1%83%D1%89%D0%B5%D0%BD%D0%BA%D0%BE