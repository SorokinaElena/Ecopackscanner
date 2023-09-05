import React, { useContext } from 'react'; 
import Button from '../Button';
import Input from '../Input';
import {useForm} from 'react-hook-form';
import s from './index.module.css';
import {Link, useNavigate} from 'react-router-dom';
import { Context } from '../../context';
import { countries_table } from './data/countries_table';
import Option from '../Option';
import authService from '../../services/auth.service';

export default function FormItem({title, descr, button, form_type, info_text, link_url, link_url_1}) {

    const navigate = useNavigate();

    const { user, setUser, modal, setModal } = useContext(Context);

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
      if (['registration'].includes(form_type)) {
        try {
          await authService.signup({...user_temp}).then(
            (response) => {
              // check for token and user already exists with 200
              //   console.log("Sign up successfully", response);
              console.log(response);
              console.log(user);
              setModal(false);
              navigate('/producer_account');
              // window.location.reload(); // обнуляет состояние
            },
            (error) => {
              console.log(error);
            }
          );
        } catch (err) {
          console.log(err);
        }
      }
      if (['login'].includes(form_type)) {
            console.log('trying to login')
            try {
              await authService.login({...user_temp}).then(
                (response) => {
                  console.log(response);
                  console.log(user);
                  setModal(false);
                  navigate('/producer_account');
                  // window.location.reload();
                },
                (error) => {
                  console.log(error);
                }
              );
            } catch (err) {
              console.log(err);
            }
                }
    }

      console.log(user);

    const {register, handleSubmit, formState: {errors}, reset} = useForm({
      mode: 'onBlur',
  }); 


    const userTypeRegister = register('userType', {
      required: '* The field "User type" is required',
    });
    const companyNameRegister = register('companyName', {
      required: '* The field "Company name" is required',
    });
    const countryRegister = register('country', {
      required: '* The field "Country" is required',
    });
    const adressRegister = register('adress', {
      required: '* The field "Adress" is required',
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

        {
            ['registration'].includes(form_type)
            ? <>
            <select className={s.form_input} {...userTypeRegister}>
                <option value=''>User type</option>
                <option value='producer'>Packaging producer</option>
                <option value='customer'>Customer</option>
            </select>

            <Input 
            type="text" // каждое свойство передается в компонент input через props и используется там
            name='companyName' 
            placeholder='Company name'
            {...companyNameRegister}
            // в качестве пропсов передали 4 элемента среди которых есть ref
            // чтобы инпут собирал данные - нужно создать на него ссылку при помощи оборачивания компонента инпута в forwardRef
            />

            <select className={s.form_input} {...countryRegister}>
            <option value='' className={s.option_placeholder}>Country</option>
            {
            countries_table.map(el => <Option key={el.place} {...el}/>)
            }
            </select>

            <Input 
            type="text" 
            name='adress' 
            placeholder='Adress'
            {...adressRegister}
            />
            </>
            : ''
        }

        {
            ['login', 'registration', 'password recovery'].includes(form_type)
            ? <Input 
            type="text"
            name='email' 
            placeholder='E-mail'
            autoComplete='off'
            {...emailRegister}
            />
            : ''
        }

        {
          ['login', 'registration'].includes(form_type)
          ? <Input 
          type="password" 
          name='password' 
          placeholder='Password'
          {...passwordRegister} 
          />
          : ''
        }

        {
            ['login'].includes(form_type)
            ? <Link to={link_url_1} style={{textDecoration: 'none'}}>
                <p className={s.form_descr} style={{fontSize: '18px', textAlign: 'right'}}>{descr}</p>
              </Link>
            : <p className={s.form_descr}>{descr}</p>
        }
    
        <Button color='green'>{button.submit}</Button> 

        {
            ['login', 'registration'].includes(form_type)
            ? <Link to={link_url} style={{textDecoration: 'none'}}>
                <Button color='white'>
                    {button.redirect}
                </Button> 
              </Link>  
            : ''
        }

        {/* {
            ['password recovery'].includes(form_type)
            ? <Link to={link_url} style={{textDecoration: 'none'}}>
                <Button color='white'>
                    {button.redirect}
                </Button> 
              </Link>  
            : ''
        } */}
          
        {
            ['login'].includes(form_type)
            ? <div>
              {errors?.email && <p className={s.error}>{errors.email.message}</p>} 
              {errors?.password && <p className={s.error}>{errors.password.message}</p>}
            </div>
            : ''
        }
            
        {
            ['registration'].includes(form_type)
            ? <div>
              {errors?.userType && <p className={s.error}>{errors.userType.message}</p>} 
              {errors?.companyName && <p className={s.error}>{errors.companyName.message}</p>} 
              {errors?.country && <p className={s.error}>{errors.country.message}</p>}
              {errors?.adress && <p className={s.error}>{errors.adress.message}</p>}
              {errors?.email && <p className={s.error}>{errors.email.message}</p>} 
              {errors?.password && <p className={s.error}>{errors.password.message}</p>}
              
            </div>
            :''
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