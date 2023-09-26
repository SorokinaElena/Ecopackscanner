import React, { useState, useEffect, useContext } from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Input from '../Input';
import Button from '../Button';
import CheckboxI from '../CheckboxI';
import { merchandise_types } from './data/merchandise_types';
import { dimensions } from './data/dimensions';
import { product_types } from './data/product_types';
import { packaging_types } from './data/packaging_types';
import { sustainability_levels } from './data/sustainability_levels';
import formService from '../../services/form.service';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../context';
import { BiSolidDownArrow } from 'react-icons/bi';
import { BiDownArrow } from 'react-icons/bi';
import { BiSolidUpArrow } from 'react-icons/bi';
import { BiUpArrow } from 'react-icons/bi';


export default function FormSearchPack1() {

    const navigate = useNavigate();

    const { authUser, setAuthUser, isAuthUser, setIsAuthUser, userType, setUserType } = useContext(Context);

    const [isActivePackName, setIsActivePackName] = useState(false);
    const [isActiveMerchandiseType, setIsActiveMerchandiseType] = useState(false);
    const [isActiveDimensions, setIsActiveDimensions] = useState(false);
    const [isActiveProductType, setIsActiveProductType] = useState(false);
    const [isActivePackagingType, setIsActivePackagingType] = useState(false);
    const [isActiveSustainabilityType, setIsActiveSustainabilityType] = useState(false);

    const [merchandiseTypeValue, setmerchandiseTypeValue] = useState('');

    const get_option_value = (event) => {
        setmerchandiseTypeValue(event.target.value)
    }

    let target_merchandise_type = merchandise_types.filter(el => el.value === merchandiseTypeValue);
    const target_merchandise_type_features_register_arr = (target_merchandise_type[0].features_value);

    // const changeSelect = (event) => {
    //     console.log('run');
    //     console.log(event.target)
    //     setmerchandiseTypeValue(event.target.value);
    // };
    
    const set_is_active_btn = (event) => {
        const title_name = event.target.id;
        if(title_name === 'name') {
          setIsActivePackName(isActivePackName ? false : true);
        }
        if(title_name === 'merchandise_type' || title_name === 'merchandise_type_1' || title_name === 'merchandise_type_2') {
          setIsActiveMerchandiseType(isActiveMerchandiseType ? false : true);
        }
        if(title_name === 'dimensions' || title_name === 'dimensions_1' || title_name === 'dimensions_2') {
          setIsActiveDimensions(isActiveDimensions ? false : true);
        }
        if(title_name === 'product_type' || title_name === 'product_type_1' || title_name === 'product_type_2') {
          setIsActiveProductType(isActiveProductType ? false : true);
        }
        if(title_name === 'packaging_type' || title_name === 'packaging_type_1' || title_name === 'packaging_type_2') {
          setIsActivePackagingType(isActivePackagingType ? false : true);
        }
        if(title_name === 'sustainability_level' || title_name === 'sustainability_level_1' || title_name === 'sustainability_level_2') {
          setIsActiveSustainabilityType(isActiveSustainabilityType ? false : true);
        }
      };

    const { register, handleSubmit, formState: { errors }} = useForm({
        mode: 'onBlur'
      });
    
    const submit = async (data) => {
      // data.length = parseFloat(data.length); 
      // data.width = parseFloat(data.width); 
      // data.height = parseFloat(data.height); 
      // data.weight = parseFloat(data.weight); 
      console.log(data);
        if(isAuthUser === true && authUser.details.userType === 'producer') {
          try {
            await formService.pack_create_req({...data}).then(
              (response) => {
                console.log(response)
                navigate('/producer_account');
                // window.location.reload(); // обнуляет состояние
              },
              (error) => {
                console.log(error);
              }
            );
          } catch (err) {
            console.log(err);
          };
        }
        if(isAuthUser === true && authUser.details.userType === 'customer') {
          try {
            await formService.pack_search_req({...data}).then(
              (response) => {
                console.log(response)
                navigate('/search_results');
                // window.location.reload(); // обнуляет состояние
              },
              (error) => {
                console.log(error);
              }
            );
          } catch (err) {
            console.log(err);
          };
        }    
    };

    const features_registers = [];
    target_merchandise_type_features_register_arr.map(el => {
        const featureRegister = register(`${el}`, {
            required: false,
        });
        features_registers.push(featureRegister);
    });

    const target_features_arr = [];
    let feature_item_index = 0;
    target_merchandise_type_features_register_arr.map(el => {
        const feature_item = {
            id: feature_item_index,
            name: el,
        };
        feature_item_index ++;
        target_features_arr.push(feature_item);
    });

    const userRegister = register('user_id', {
      required: false,
    });

    // const userTypeRegister = register('userType', {
    //   required: true,
    // });

    const nameRegister = register('name', { 
      required: false,
    });

    const estimatedSizeRegister = register('estimatedSize', { 
      required: true,
    });

    const merchandiseTypeRegister = register('category', {
        required: true,
      });

    // const lengthRegister = register('length', { 
    //     required: true,
    //   });
    //   const widthRegister = register('width', { 
    //     required: true,
    //   });
    //   const heightRegister = register('height', { 
    //     required: true,
    //   });
    //   const weightRegister = register('weight', { 
    //     required: true,
    //   });

    const prodact_type_registers = [];
    product_types.map(el => {
      const register_name = el.name;
      const register_object = register(`${register_name}`, {
        required: false,
      });
      prodact_type_registers.push(register_object);
    });
    // console.log(prodact_type_registers);
    // console.log(prodact_type_registers[0]);
    const otherTypeRegister = register('otherType', {
        required: false,
      });

    const packaging_type_registers = [];
    packaging_types.map(el => {
      const register_name = el.name;
      const register_object = register(`${register_name}`, {
        required: false,
      });
      packaging_type_registers.push(register_object);
    });
    const otherPackagingTypeRegister = register('otherPackagingType', {
        required: false,
    });
  
    const sustainability_level_registers = [];
    sustainability_levels.map(el => {
      const register_name = el.name;
      const register_object = register(`${register_name}`, {
        required: false,
      });
      sustainability_level_registers.push(register_object);
    });
    const otherSustainabilityLevelRegister = register('otherSustainability', {
        required: false,
    });


  return (
    <div className={s.form_container}>
        <form onSubmit={handleSubmit(submit)}>

            {
              (authUser.details._id !== '' && authUser.details.userType === 'producer')
              ? <div className={s.btn_content_container}>
                  <div className={s.checkbox_container}>
                      <Input type='hidden' name='user' value={authUser.details._id} {...userRegister}  />
                      {/* <Input type='hidden' name='user_type' value={authUser.details.userType} {...userTypeRegister}  /> */}
                  </div>
                </div>
              : ''
                // <div className={s.btn_content_container}>
                //   <div className={s.checkbox_container}>
                //       <Input type='hidden' name='user_type' value={userType} {...userTypeRegister}  />
                //   </div>
                // </div>
            }

            {
              authUser.details.userType === 'producer' && authUser.details._id !== ''
              ? <>
                <div className={s.button_container}>
                  <div className={s.title} id='name' onClick={set_is_active_btn}>
                    Name of a packaging
                  {
                    isActivePackName 
                    ? <BiUpArrow className={s.icon} id='name_1' onClick={set_is_active_btn} /> 
                    : < BiDownArrow className={s.icon} id='name_2' onClick={set_is_active_btn} />
                  }
                    </div>
                </div>
                <div className={[s.btn_content_container, isActivePackName ? s.is_active : ''].join(' ')}>
                  <div className={s.checkbox_container}>
                  < Input type='text' name='name' placeholder='Enter the name of the packaging you want to add...' autoComplete="off" {...nameRegister}  />
                  </div>
                </div>  
                </>
              : ''
            }
            
            
            <div className={s.button_container}>
                <div className={s.title} id='merchandise_type' onClick={set_is_active_btn}>
                  Product category
                  {
                    isActiveMerchandiseType
                    ? <BiUpArrow className={s.icon} id='merchandise_type_1' onClick={set_is_active_btn}/>  
                    : <BiDownArrow className={s.icon} id='merchandise_type_2' onClick={set_is_active_btn}/> 
                  }
                </div>
            </div>
            <div className={[s.btn_content_container, isActiveMerchandiseType ? s.is_active : ''].join(' ')}>
                <select /*name='category' value={merchandiseTypeValue} onChange={changeSelect}*/ onClick={get_option_value} className={[s.inputs_container, s.select].join(' ')} {...merchandiseTypeRegister}>
                    {
                    merchandise_types.map(el => 
                        <option value={el.value} key={el.id}>{el.name}</option>)
                    }  
                </select>
                <div className={[s.merchandise_features_container, merchandiseTypeValue !== '' ? s.is_active : ''].join(' ')}>
                   {
                    target_features_arr.map(el => 
                        <CheckboxI 
                        key={el.id} 
                        name={el.name}
                        label={el.name}
                        {...features_registers[el.id]}
                        />
                        )
                   }
                </div>
            </div>

            <div className={s.button_container}>
                <div className={s.title} id='dimensions' onClick={set_is_active_btn}>
                  Product dimensions
                  {
                    isActiveDimensions 
                    ? <BiUpArrow className={s.icon} id='dimensions_1' onClick={set_is_active_btn} /> 
                    : <BiDownArrow className={s.icon} id='dimensions_2' onClick={set_is_active_btn} />
                  }
                  </div>
            </div>
            <div className={[s.btn_content_container, isActiveDimensions ? s.is_active : ''].join(' ')}>
                    <select className={[s.inputs_container, s.select].join(' ')} {...estimatedSizeRegister}>
                      <option value=''>Choose estimated size - max length of one side up to...</option>
                      <option value='small'>small - 20 cm</option>
                      <option value='medium'>medium - 50 cm</option>
                      <option value='large'>large - 100 cm</option>
                      <option value='extra_large'>extra large - 150 cm</option>
                    </select>
                {/* <div className={s.checkbox_container}>
                    <div>
                    <label htmlFor='length'>length:</label>
                    <Input type='number' name='length' placeholder='centimeters' autoComplete="off" {...lengthRegister}  />
                    </div>
                    <div>
                    <label htmlFor='width'>width:</label>
                    <Input type='number' name='width' placeholder='centimeters' autoComplete="off" {...widthRegister}  />
                    </div>
                    <div>
                    <label htmlFor='height'>height:</label>
                    <Input type='number' name='height' placeholder='centimeters' autoComplete="off" {...heightRegister}  />
                    </div>
                    <div>
                    <label htmlFor='weight'>weight:</label>
                    <Input type='number' name='weight' placeholder='grams' autoComplete="off" {...weightRegister}  />
                    </div>
                </div> */}
            </div>

            <div className={s.button_container}>
                <div className={s.title} id='product_type' onClick={set_is_active_btn}>
                  Product type
                  {
                    isActiveProductType 
                    ? <BiUpArrow className={s.icon} id='product_type_1' onClick={set_is_active_btn} /> 
                    : <BiDownArrow className={s.icon} id='product_type_2' onClick={set_is_active_btn} />
                  }
                  </div>
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
                <div className={s.title} id='packaging_type' onClick={set_is_active_btn}>
                  Desired packaging type
                  {
                    isActivePackagingType 
                    ? <BiUpArrow className={s.icon} id='packaging_type_1' onClick={set_is_active_btn} /> 
                    : <BiDownArrow className={s.icon} id='packaging_type_2' onClick={set_is_active_btn} />
                  }
                  </div >
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
            <div className={s.title} id='sustainability_level' onClick={set_is_active_btn}>
              Desired sustainability level
                {
                  isActiveSustainabilityType 
                  ? <BiUpArrow className={s.icon} id='sustainability_level_1' onClick={set_is_active_btn} /> 
                  : <BiDownArrow className={s.icon} id='sustainability_level_2' onClick={set_is_active_btn} />
                }
              </div>
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

          {
            authUser.details.userType === 'producer' && authUser.details._id !== ''
            ? <div className={s.button_container}>
                <Button color='green'>Add packaging</Button>
              </div>
            : <div className={s.button_container}>
                <Button color='green'>Search packaging</Button>
              </div>
          }  

        </form>
    </div>
  )
}
