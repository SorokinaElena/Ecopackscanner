import React, { useContext } from 'react';
import s from './index.module.css';
import FormLogIn from '../FormLogIn';
import { CloseOutlined } from '@ant-design/icons';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
 
export default function ModalLogIn() {

    const { modalLogIn, setModalLogIn } = useContext(Context);

  return (
    <div className={[s.modal, modalLogIn ? s.active : ''].join(' ')} >
        <div className={s.modal_content}>

        <Link to='/'>
            <CloseOutlined onClick={() => {setModalLogIn(false)}} className={s.icon_close} />
        </Link>

        <Routes>

            <Route path='/login_form' element={    
                <FormLogIn 
                    title='Log in' 
                    descr='recower password' 
                    button={{submit: 'Log in', redirect: 'Registration'}}
                    form_type={'login'}
                    link_url_1={'/recovery_password_form'}
                />} 
            />

            <Route path='/recovery_password_form' element={ 
                <FormLogIn
                    title='Password recovery'
                    button={{submit: 'Send', redirect: 'Log in'}}
                    descr='The temporary password is valid for 24 hours.'
                    form_type={'password recovery'}
                    info_text='To receive a temporary password, you must enter the email address you provided during registration.'
                />}
            />         

        </Routes>

        </div>
    </div>
  )
}