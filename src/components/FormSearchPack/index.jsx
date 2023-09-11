import React, { useState } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import CheckboxI from '../CheckboxI';
import Input from '../Input';
import { dimensions } from './data/dimensions';
import { product_types } from './data/product_types';


export default function FormSearchPack() {

  const [checked, setChecked] = useState(false); 
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
        mode: 'onBlur'
      });
    
    const submit = (data) => {
      console.log(data);
      // alert('Your request is being processed');
      // navigate('/offer');
      // window.location.reload();
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

    const prodact_type_registers = [];

    product_types.map(el => {
      // const register_name = `${el.name}Register`;
      const register_name = el.name;
      const register_object = register(`${register_name}`, {
        required: false,
      })
      prodact_type_registers.push(register_object);
    });

    // console.log(prodact_type_registers);
    // console.log(prodact_type_registers[0]);

    const otherTypeRegister = register('otherType');
 

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

              <div className={s.inputs_container}>
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
              </div>
            </div>
          
          <div className={s.button_container}>
            <Button color='grey' name='type' onClick={set_is_active_type}>Product type</Button>
          </div>

          <div className={[s.btn_content_container, isActiveType ? s.is_active : ''].join(' ')}>
            <div className={s.checkbox_container}>
                {
                  product_types.map(el => 
                  <CheckboxI 
                    key={el.id} 
                    name={prodact_type_registers[el.id].name}
                    label={prodact_type_registers[el.id].name}
                    {...prodact_type_registers[el.id]}
                  />)
                }
                <Input 
                type="text" 
                name='otherType' 
                placeholder='Another product type'
                {...otherTypeRegister} 
                />
            </div>
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

              {/* <CheckboxI
              name={prodact_type_registers[0].name}
              label={prodact_type_registers[0].name}
              {...prodact_type_registers[0]}
              /> */}

              // const liquid_3Register = register('liquid_3',  {
              //   required: false,
              // }); 

              {/* <CheckboxI
              name="liquid_3"
              label="liquid_3"
              {...liquid_3Register}
              /> */}

    // const solidRegister = register('solid');
    // const powderRegister = register('powderd');
              // const liquid_1Register = register('liquid_1',  {
              //   required: false,
              // }); //const { onChange, onBlur, name, ref }
          
              // const liquid_2Register = register('liquid_2',  {
              //   required: false,
              //   // onChange: () => setChecked(!checked),
              // }); //const { onChange, onBlur, name, ref }
{/* <div className={[s.btn_content_container, isActiveType ? s.is_active : ''].join(' ')}>
            <div className={s.checkbox_container}>
              <label style={{ padding: '5px 0 5px 0', color: '#2D2D2D', textAllign: 'center' }}>
              <input
              style={{ width: '20px', height: '20px', marginRight: '10px', cursor: 'pointer' }}
              type='checkbox'
              name="liquid_1"
              value={true}
              label="liquid_1"
              {...liquid_1Register}
              />
              liquid_1
              </label>
              
              <label style={{ padding: '5px 0 5px 0', color: '#2D2D2D', textAllign: 'center' }}>
              <input
              style={{ width: '20px', height: '20px', marginRight: '10px', cursor: 'pointer' }}
              type='checkbox'
              name="liquid_2"
              value='B'
              label="liquid_2"
              {...liquid_2Register}
              />
              liquid_2
              </label>

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