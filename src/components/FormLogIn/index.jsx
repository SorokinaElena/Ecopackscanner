import React, { useContext } from 'react'; 
import Button from '../Button';
import Input from '../Input';
import {useForm} from 'react-hook-form';
import s from './index.module.css';
import {Link, useNavigate} from 'react-router-dom';
import { Context } from '../../context';
import authService from '../../services/auth.service';

export default function FormLogIn({title, descr, button, form_type, info_text, link_url, link_url_1}) {

    const navigate = useNavigate();

    const { user, setUser, modalLogIn, setModalLogIn } = useContext(Context);

    const submit = async (data) => {
      console.log(data);
      const user_temp = data;
      console.log(user_temp);
      setUser(user_temp);
      console.log(user);
      reset({
        email: '',
        password: '',
      });
      if(['login'].includes(form_type)) {
        try {
          await authService.login({...user_temp}).then(
            (response) => {
              setModalLogIn(false);
              navigate('/producer_account');
              // window.location.reload();
            },
            (error) => {
              console.log(error);
              alert(`wrong login or password`);
            }
          );
        } catch (err) {
          console.log(err);
        }
      }
      if(['password recovery'].includes(form_type)) {
        authService.recowerPassword({...user_temp});
        console.log('request for password recowery sent');
        setModalLogIn(false);
        navigate('/');
        window.location.reload();
        // try {
        //   await authService.recowerPassword({...user_temp}).then(
        //     (response) => {
        //       setModalLogIn(false);
        //       navigate('/');
              // window.location.reload();
      //       },
      //       (error) => {
      //         console.log(error);
      //       }
      //     );
      //   } catch (err) {
      //     console.log(err);
      //   }
      }     
    }

      console.log(user);

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
      mode: 'onBlur',
  }); 

    const emailRegister = register('email', {
      required: '* The field "E-mail" is required',
      pattern: {
        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        message: '* Not valid email-format'
    }
    });
    const passwordRegister = register('password', {
      required: '* The field "Password" is required',
    });
    

  return (
    <form onSubmit={handleSubmit(submit)} className={s.form_item}>

        <p className={s.form_title}> {title} </p>

        <p className={s.form_descr}>{info_text}</p>

        <Input 
            type="text"
            name='email' 
            placeholder='E-mail'
            autoComplete='off'
            {...emailRegister}
            />
      
        {
            ['login'].includes(form_type)
            ? <>
                <Input 
                type="password" 
                name='password' 
                placeholder='Password'
                {...passwordRegister} 
                />
                <Link to={link_url_1} style={{textDecoration: 'none'}}>
                  <p className={s.form_descr} style={{fontSize: '18px', textAlign: 'right'}}>{descr}</p>
                </Link>
              </>
            : <p className={s.form_descr}>{descr}</p>
        }
    
        <Button color='green'>{button.submit}</Button> 
          
        {
            ['login'].includes(form_type)
            ? <div>
              {errors?.email && <p className={s.error}>{errors.email.message}</p>} 
              {errors?.password && <p className={s.error}>{errors.password.message}</p>}
            </div>
            : ''
        }

        {
            ['Password recovery'].includes(form_type)
            ? <div>
              {errors?.email && <p className={s.error}>{errors.email.message}</p>} 
            </div>
            : ''
        }

    </form>
  )
}