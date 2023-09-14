import React, { useState } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import CheckboxI from '../CheckboxI';
import Input from '../Input';
import { dimensions } from './data/dimensions';
import { product_types } from './data/product_types';
import { packaging_types } from './data/packaging_types';
import { sustainability_levels } from './data/sustainability_levels';
import { merchandise_types } from './data/merchandise_types';


export default function FormSearchPack() {
 
  const [isActiveDimensions, setIsActiveDimensions] = useState(false);
  const [isActiveProductType, setIsActiveProductType] = useState(false);
  const [isActivePackagingType, setIsActivePackagingType] = useState(false);
  const [isActiveSustainabilityType, setIsActiveSustainabilityType] = useState(false);
  const [isActiveMerchandiseType, setIsActiveMerchandiseType] = useState(false);
  const [isSelectedMerchandiseType, setIsSelectedMerchandiseType] = useState(false);

  const set_is_active_btn = (event) => {
    const btn_name = event.target.id;
    if(btn_name === 'dimensions') {
      setIsActiveDimensions(isActiveDimensions ? false : true);
    }
    if(btn_name === 'product_type') {
      setIsActiveProductType(isActiveProductType ? false : true);
    }
    if(btn_name === 'packaging_type') {
      setIsActivePackagingType(isActivePackagingType ? false : true);
    }
    if(btn_name === 'sustainability_level') {
      setIsActiveSustainabilityType(isActiveSustainabilityType ? false : true);
    }
    if(btn_name === 'merchandise_type') {
      setIsActiveMerchandiseType(isActiveMerchandiseType ? false : true);
    }
  }

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        mode: 'onBlur'
      });
    
    const submit = (data) => {
      console.log(data);
      // alert('Your request is being processed');
      // navigate('/offer');
      // window.location.reload();
    }
    
    const merchandiseTypeRegister = register('merchandiseType', {
      required: true,
    });

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
      });
      prodact_type_registers.push(register_object);
    });
    // console.log(prodact_type_registers);
    // console.log(prodact_type_registers[0]);
    const otherTypeRegister = register('otherType');

    const packaging_type_registers = [];
    packaging_types.map(el => {
      const register_name = el.name;
      const register_object = register(`${register_name}`, {
        required: false,
      });
      packaging_type_registers.push(register_object);
    });
    const otherPackagingTypeRegister = register('otherPackagingType');

    const sustainability_level_registers = [];
    sustainability_levels.map(el => {
      const register_name = el.name;
      const register_object = register(`${register_name}`, {
        required: false,
      });
      sustainability_level_registers.push(register_object);
    });
    const otherSustainabilityLevelRegister = register('otherSustainability');

    const merchandise_type_registers = [];
    merchandise_types.map(el => {
      const register_name = el.name;
      const register_object = register(`${register_name}`, {
        required: true,
      });
      merchandise_type_registers.push(register_object);
    });

    const set_merchandise_type =(event) => {
      const is_merchandise_type = event.target.value;
      console.log(is_merchandise_type);
      if(is_merchandise_type.length > 0) {
        setIsSelectedMerchandiseType(isSelectedMerchandiseType ? false : true);
        console.log(is_merchandise_type);
      }
    }


  return (
    <div className={s.form_container}>
        <form onSubmit={handleSubmit(submit)}>

          <div className={s.button_container}>
            <Button color='grey' id='merchandise_type' onClick={set_is_active_btn}>Product category</Button>
          </div>

          <div className={[s.btn_content_container, isActiveMerchandiseType ? s.is_active : ''].join(' ')}>
              <select id='merchandise_type' className={[s.inputs_container, s.select].join(' ')} onClick={set_merchandise_type} {...merchandiseTypeRegister}>
                <option value=''>Choose product category...</option>
                {
                 merchandise_types.map(el => 
                  <option value={el.name}>{el.name}</option>
                )}
              </select>
              <div className={[s.merchandise_features_container, isSelectedMerchandiseType ? s.is_active : ''].join(' ')}>
              <CheckboxI 
                    // key={el.id} 
                    name={prodact_type_registers[0].name}
                    label={prodact_type_registers[0].name}
                    {...prodact_type_registers[0]}
              />
              <CheckboxI 
                    // key={el.id} 
                    name={prodact_type_registers[1].name}
                    label={prodact_type_registers[1].name}
                    {...prodact_type_registers[1]}
              />
              </div>
          </div>
          
          <div className={s.button_container}>
            <Button color='grey' id='dimensions' onClick={set_is_active_btn}>Product dimensions</Button>
          </div>

            <div className={[s.btn_content_container, isActiveDimensions ? s.is_active : ''].join(' ')}>
              {/* <select className={[s.inputs_container, s.select].join(' ')} {...estimatedSizeRegister}>
                <option value=''>Choose estimated size...</option>
                <option value='small'>small</option>
                <option value='medium'>medium</option>
                <option value='large'>large</option>
                <option value='extra_large'>extra large</option>
              </select> */}

              <div className={s.checkbox_container}>
                <div>
                  <label for='length'>length:</label>
                  <Input type='number' name='length' placeholder='centimeters' autoComplete="off" {...lengthRegister}  />
                </div>
                <div>
                  <label for='length'>length:</label>
                  <Input type='number' name='length' placeholder='centimeters' autoComplete="off" {...lengthRegister}  />
                </div>
                <div>
                  <label for='width'>width:</label>
                  <Input type='number' name='width' placeholder='centimeters' autoComplete="off" {...widthRegister}  />
                </div>
                <div>
                  <label for='height'>height:</label>
                  <Input type='number' name='height' placeholder='centimeters' autoComplete="off" {...heightRegister}  />
                </div>
                <div>
                  <label for='weight'>weight:</label>
                  <Input type='number' name='weight' placeholder='grams' autoComplete="off" {...weightRegister}  />
                </div>
              </div>
            </div>
          
          <div className={s.button_container}>
            <Button color='grey' id='product_type' onClick={set_is_active_btn}>Product type</Button>
          </div>

          <div className={[s.btn_content_container, isActiveProductType ? s.is_active : ''].join(' ')}>
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
                placeholder='your specific product type'
                {...otherTypeRegister} 
                />
            </div>
          </div>

          <div className={s.button_container}>
            <Button color='grey' id='packaging_type' onClick={set_is_active_btn}>Desired packaging type</Button>
          </div>

          <div className={[s.btn_content_container, isActivePackagingType ? s.is_active : ''].join(' ')}>
            <div className={s.checkbox_container}>
                {
                  packaging_types.map(el => 
                  <CheckboxI 
                    key={el.id} 
                    name={packaging_type_registers[el.id].name}
                    label={packaging_type_registers[el.id].name}
                    {...packaging_type_registers[el.id]}
                  />)
                }
                <Input 
                type="text" 
                name='otherPackagingType' 
                placeholder='your specific packaging type'
                {...otherPackagingTypeRegister} 
                />
            </div>
          </div>

          <div className={s.button_container}>
            <Button color='grey' id='sustainability_level' onClick={set_is_active_btn}>Desired sustainability level</Button>
          </div>

          <div className={[s.btn_content_container, isActiveSustainabilityType ? s.is_active : ''].join(' ')}>
            <div className={s.checkbox_container}>
                {
                  sustainability_levels.map(el => 
                  <CheckboxI 
                    key={el.id} 
                    name={sustainability_level_registers[el.id].name}
                    label={sustainability_level_registers[el.id].name}
                    {...sustainability_level_registers[el.id]}
                  />)
                }
                <Input 
                type="text" 
                name='otherSustainability' 
                placeholder='your specific sustainability feature '
                {...otherSustainabilityLevelRegister} 
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