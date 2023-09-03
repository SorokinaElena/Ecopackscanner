import React from 'react';
import s from './index.module.css';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import Checkbox from '../Checkbox';


export default function FormSearchPack() {

    const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
        mode: 'onBlur',
        // defaultValues: {
        //   first_option: '',
        //   second_option: '',
        // }
    });
    
    const submit = (data) => {
      console.log(data);
    }
    
    const firstOptionRegister = register('first_option', {
      required: true,
    }); 
    
    const secondOptionRegister = register('second_option', {
      required: true,
    }); 
    
    const thirdOptionRegister = register('third_option', { 
      required: true,
    });
    
    const fourthOptionRegister = register('fourth_option', { 
      required: true,
    });

    const liquidRegister = register('liquid');

    

  return (
    <div className={s.form_container}>
        <form onSubmit={handleSubmit(submit)}>
          <div className={s.input_container}>
            <label for="first_option">First search option:</label>
            <select {...firstOptionRegister}>
                <option value=''>Choose a type of your product...</option>
                <option value='Edible'>Edible</option>
                <option value='Inedible'>Inedible</option>
            </select>
          </div>
          {/* <div className={s.input_container}>
            <label>
                Product Type:
            <input
                ref={register({ required: "This is required" })}
                name="liquid"
                value={true}
                type="checkbox"
            />
            </label>
          </div> */}
          <div className={s.input_container}>
            <Checkbox
            name="liquid"
            value={true}
            label="liquid"
            {...liquidRegister}
            />
          </div>
          <div className={s.input_container}>
            <label for="second_option">Second search option:</label>
            <input type="text" name='second_option' placeholder='' autoComplete="off" {...secondOptionRegister}  />
          </div>
          <div className={s.input_container}>
            <label for="third_option">Third search option:</label>
            <input type="text" id="third_option" name="third_option"  {...thirdOptionRegister}/>
          </div>
          <div className={s.input_container}>
            <label for="fourth_option">Fourth search option:</label>
            <input type="button" id="fourth_option" name="fourth_option" {...fourthOptionRegister}/>
          </div>
          <div className={s.input_container}>
            <Button color='white'>Choose type of package</Button>
          </div>
          <div className={s.input_container}>
            <button>Search</button>
          </div>
        </form>
      </div>
  )
}
