import React, { useState, useEffect } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import CheckboxItem from '../CheckboxItem';
import Input from '../Input';
import { dimensions } from './data/dimensions';
import DimensionItem from '../DimensionItem';
import { product_types } from './data/product_types';


export default function FormSearchPack() {

  const [checked, setChecked] = useState();
  console.log(checked);
// console.log(defaultChecked);

  // useEffect(() => {
  //   if (onChange) {
  //     onChange(checked);
  //   }
  // }, [checked]);
  const [isActiveDimensions, setIsActiveDimensions] = useState(false);
  const [isActiveType, setIsActiveType] = useState(false);

  const set_is_active_dimensions = () => {
    // if(btn_name === 'dimensions') {
      setIsActiveDimensions(isActiveDimensions ? false : true);
    // };
    // if(btn_name === 'type') {
    //   setIsActiveType(isActiveType ? false : true);
    // };
  };
  
  const set_is_active_type = () => {
    // if(btn_name === 'dimensions') {
      setIsActiveType(isActiveType ? false : true);
    // };
    // if(btn_name === 'type') {
    //   setIsActiveType(isActiveType ? false : true);
    // };
  };

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
    
    
    const estimatedSizeRegister = register('estimatedSize', { 
      required: true,
    });
    const lengthRegister = register('length', { 
      required: true,
    });
    const widthRegister = register('width', { 
      required: true,
    });
    const heightRegister = register('height', { 
      required: true,
    });
    const weightRegister = register('weight', { 
      required: true,
    });
    const liquidRegister = register('liquid');
    const solidRegister = register('solid');
    const powderRegister = register('powderd');


  return (
    <div className={s.form_container}>
        <form onSubmit={handleSubmit(submit)}>
          
            <div className={s.button_container}>
              <Button color='grey' name='dimensions' onClick={set_is_active_dimensions}>Product dimensions</Button>
            </div>
            <div className={[s.btn_content_container, isActiveDimensions ? s.is_active : ''].join(' ')}>
              <select className={[s.inputs_container, s.select].join(' ')} {...estimatedSizeRegister}>
                <option value=''>Choose estimated size...</option>
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
                <option value='extra_large'>extra large</option>
              </select>
              {/* <div className={s.inputs_container}>
                <div>
                  <label for='length'>length:</label>
                  <Input type='number' name='length' placeholder='cm' autoComplete="off" {...lengthRegister}  />
                </div>
                <div>
                  <label for='width'>width:</label>
                  <Input type='number' name='width' placeholder='cm' autoComplete="off" {...widthRegister}  />
                </div>
                <div>
                  <label for='height'>height:</label>
                  <Input type='number' name='height' placeholder='cm' autoComplete="off" {...heightRegister}  />
                </div>
                <div>
                  <label for='weight'>weight:</label>
                  <Input type='number' name='weight' placeholder='gramm' autoComplete="off" {...weightRegister}  />
                </div>
              </div> */}

              <div className={s.inputs_container}>
                {
                  dimensions.map(el => <DimensionItem key={el.id} {...el} />)
                }
              </div>
          </div>
          
          <div className={s.button_container}>
            <Button color='grey' name='type' onClick={set_is_active_type}>Product type</Button>
          </div>
          <div className={[s.btn_content_container, isActiveType ? s.is_active : ''].join(' ')}>
            <div className={s.checkbox_container}>
                {
                  product_types.map(el => <CheckboxItem key={el.id} {...el} />)
                }
                <Input 
                type="text" 
                name='product_type_other' 
                placeholder='Another product type'
                // {...adressRegister} 
                />
            </div>
          </div>


          {/* <div className={[s.btn_content_container, isActiveType ? s.is_active : ''].join(' ')}>
            <div className={s.checkbox_container}>
              <CheckboxItem
              name="liquid"
              value={true}
              label="liquid"
              {...liquidRegister}
              />
              <CheckboxItem
              name="solid"
              value={true}
              label="solid"
              {...solidRegister}
              />
              <CheckboxItem
              name="powder"
              value={true}
              label="powder"
              {...powderRegister}
              />
            </div>
          </div> */}
          

          {/* className={[s.nav_menu, menuActive ? s.is_active : ''].join(' ')} */}
          {/* [s.button_container, buttonActive ? s.button_container_is_active : ''].join(' ') */}
          
          
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
