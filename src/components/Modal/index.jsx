import React, { useContext } from 'react';
import s from './index.module.css';
import FormItem from '../FormItem';
import { CloseOutlined } from '@ant-design/icons';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
 
export default function Modal() {

    const { modal, setModal } = useContext(Context);

  return (
    <div className={[s.modal, modal ? s.active : ''].join(' ')} >
        <div className={s.modal_content}>

        <Link to='/'>
            <CloseOutlined onClick={() => {setModal(false)}} className={s.icon_close} />
        </Link>

        <Routes>

            <Route path='/login_form' element={    
                <FormItem 
                    title='Log in' 
                    descr='recower password' 
                    button={{submit: 'Log in', redirect: 'Registration'}}
                    form_type={'login'}
                    link_url={'/registration_form'}
                    link_url_1={'/recovery_password_form'}
                />} 
            />

            <Route path='/registration_form' element={
                <FormItem 
                    title='Registration' 
                    descr='By registering you agree to our Terms & Conditions and Privacy Policy'
                    button={{submit: 'Registration', redirect: 'Log in'}}
                    form_type={'registration'}
                    link_url={'/login_form'}
                />} 
            />

            <Route path='/recovery_password_form' element={ 
                <FormItem 
                    title='Password recovery'
                    button={{submit: 'Send', redirect: 'Log in'}}
                    descr='The temporary password is valid for 24 hours.'
                    form_type={'password recovery'}
                    info_text='To receive a temporary password, you must enter the email address you provided during registration.'
                    link_url={'/login_form'}
                />}
            />         

        </Routes>

        </div>
    </div>
  )
}