import React, { useState, useEffect } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Checkbox from '../Checkbox';


export default function FormSearchPack() {

  const [checked, setChecked] = useState();
  console.log(checked);
  // console.log(defaultChecked);

  // useEffect(() => {
  //   if (onChange) {
  //     onChange(checked);
  //   }
  // }, [checked]);

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        mode: 'onBlur',
        defaultValues: {
          first_option: '',
          second_option: '',
          liquid: false,
        }
    });
    
    const submit = (data) => {
      console.log(data);
    }
    
    
    
    const thirdOptionRegister = register('third_option', { 
      required: true,
    });
    
    const fourthOptionRegister = register('fourth_option', { 
      required: true,
    });

    const liquidRegister = register('liquid');
    const solidRegister = register('solid');
    const powderRegister = register('powderd');


  return (
    <div className={s.form_container}>
        <form onSubmit={handleSubmit(submit)}>
          
          <div className={s.checkbox_container}>
            <Checkbox
            name="liquid"
            value={true}
            label="liquid"
            // onChange={e => {
            //   setChecked(e.target.checked);
            // }}
            // onClick={() => setChecked(!checked)}
            // checked={checked}
            {...liquidRegister}
            />
            <Checkbox
            name="solid"
            value={true}
            label="solid"
            {...solidRegister}
            />
            <Checkbox
            name="powder"
            value={true}
            label="powder"
            {...powderRegister}
            />
          </div>

          {/* className={[s.nav_menu, menuActive ? s.is_active : ''].join(' ')} */}
          <div className={[s.button_container, buttonActive ? s.button_container_is_active : ''].join(' ')}>
            <Button color='grey'>Product type</Button>
          </div>
          
          <div className={s.checkbox_container}>
            <p>Product type:</p>
            <Checkbox
            name="liquid"
            value={true}
            label="liquid"
            // onChange={e => {
            //   setChecked(e.target.checked);
            // }}
            // onClick={() => setChecked(!checked)}
            // checked={checked}
            {...liquidRegister}
            />
            <Checkbox
            name="solid"
            value={true}
            label="solid"
            {...solidRegister}
            />
            <Checkbox
            name="powder"
            value={true}
            label="powder"
            {...powderRegister}
            />
          </div>

          <div className={s.checkbox_container}>
            <p>Product type:</p>
            <Checkbox
            name="liquid"
            value={true}
            label="liquid"
            // onChange={e => {
            //   setChecked(e.target.checked);
            // }}
            // onClick={() => setChecked(!checked)}
            // checked={checked}
            {...liquidRegister}
            />
            <Checkbox
            name="solid"
            value={true}
            label="solid"
            {...solidRegister}
            />
            <Checkbox
            name="powder"
            value={true}
            label="powder"
            {...powderRegister}
            />
          </div>
          
          <div className={s.button_container}>
            <Button color='green'>Search</Button>
          </div>
          
        </form>
      </div>
  )
}

// const firstOptionRegister = register('first_option', {
//   required: true,
// }); 

// const secondOptionRegister = register('second_option', {
//   required: true,
// }); 

{/* <div className={s.input_container}>
            <label for="first_option">First search option:</label>
            <select {...firstOptionRegister}>
                <option value=''>Choose a type of your product...</option>
                <option value='Edible'>Edible</option>
                <option value='Inedible'>Inedible</option>
            </select>
</div> */}

{/* <div className={s.input_container}>
            <label for="second_option">Second search option:</label>
            <input type="text" name='second_option' placeholder='' autoComplete="off" {...secondOptionRegister}  />
</div> */}
