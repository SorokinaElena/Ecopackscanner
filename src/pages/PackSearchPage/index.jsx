import React from 'react';
import s from './index.module.css';
import pack_search_img from '../../media/pack_search_img_close-up-sustainable-coffee-cup-alternatives_3_small.png';
import { useForm } from 'react-hook-form';

export default function PackSearchPage() {

  const { register, handleSubmit, formState: { errors }, watch, setValue } = useForm({
    mode: 'onBlur',
    // defaultValues: {
    //   first_option: '',
    //   second_option: '',
    // }
});

const submit = (data) => {
  console.log('data sent');
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

  return (
    <div className={s.pack_search_page}>
      <img className={s.pack_search_img} src={pack_search_img} alt="close-up-sustainable-coffee-cup-alternatives" />
    
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
            <input type="text" id="fourth_option" name="fourth_option" {...fourthOptionRegister}/>
          </div>
          <div className={s.input_container}>
            <button>Search</button>
          </div>
        </form>
      </div>
    </div>
  )
}
