import React, { useContext } from 'react';
import s from './index.module.css';
import FormSignUp from '../FormSignUp';
import { CloseOutlined } from '@ant-design/icons';
import {Routes, Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
 
export default function ModalSignUp() {

    const { modalSignUp, setModalSignUp } = useContext(Context);

  return (
    <div className={[s.modal, modalSignUp ? s.active : ''].join(' ')} >
        <div className={s.modal_content}>

        <Link to='/'>
            <CloseOutlined onClick={() => {setModalSignUp(false)}} className={s.icon_close} />
        </Link>

        <Routes>

            <Route path='/registration_form' element={
                <FormSignUp 
                    title='Registration' 
                    descr='By registering you agree to our Terms & Conditions and Privacy Policy'
                    button={{submit: 'Registration'}}
                    form_type={'registration'}
                />} 
            />

        </Routes>

        </div>
    </div>
  )
}