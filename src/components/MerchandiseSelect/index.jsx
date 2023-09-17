import React, { useState } from 'react';
import s from './index.module.css';
import { merchandise_types } from '../FormSearchPack/data/merchandise_types';

const MerchandiseSelect = () => {

    const [merchandiseTypeValue, setmerchandiseTypeValue] = useState('');

    function changeSelect(event) {
       setmerchandiseTypeValue(event.target.value);
       console.log('func run')
    }
    console.log(merchandiseTypeValue)

  return (
      <select value={merchandiseTypeValue} onChange={changeSelect} className={[s.inputs_container, s.select].join(' ')}>   
        {
            merchandise_types.map(el => 
                <option value={el.value} key={el.id}>{el.name}</option>)
        }
      </select>
    
    
  )};

export default MerchandiseSelect;
