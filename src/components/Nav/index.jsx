import React, { useContext, useState, useEffect } from 'react';
import s from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../Button';
import { Context } from '../../context';
import { AiOutlineMenuFold } from 'react-icons/ai';
// import { VscAccount } from 'react-icons/vsc';
import { PiUser } from 'react-icons/pi';
import { PiUserPlus } from 'react-icons/pi';
import { PiUserMinus } from 'react-icons/pi';
import { PiUserGear } from 'react-icons/pi';
import { VscChromeClose } from 'react-icons/vsc';
import authService from '../../services/auth.service';


export default function Nav() {

  const navigate = useNavigate();

  const { modalSignUp, setModalSignUp, modalLogIn, setModalLogIn, modal, setModal, user, setUser, isAuthUser, setIsAuthUser, authUser, setAuthUser, userType, setUserType } = useContext(Context);

  const [menuActive, setMenuActive] = useState(false);

  const set_menu_active = () => {
    setMenuActive(menuActive ? false : true);

  }

  let btn_status_unauthuser = {};
  let btn_status_authuser = {};

  isAuthUser ? btn_status_unauthuser = {display: 'none'} : btn_status_unauthuser = {display: 'flex'};
  isAuthUser ? btn_status_authuser = {display: 'flex'} : btn_status_authuser = {display: 'none'};

  const sign_out = () => {
    authService.logout();
    setIsAuthUser(false);
    setAuthUser({
      access_token: '',
      details: {
        _id: '',
        userType: '',
        companyName: '',
        country: '',
        adress: '',
        email: '',
      },
      isAdmin: false,
    })
  };

  const navigate_to_account = () => {
    if(authUser.details.userType === 'producer') {
      navigate('/producer_account')
    } else {
      navigate('/customer_account')
    }
  } 

  return (
    <nav className={s.nav}>
      <div className={s.nav}>
    
      <Link to='/login_form' style={{textDecoration: 'none'}}>
        <Button 
          color='green' 
          style={btn_status_unauthuser}
          onClick={() => {setModalLogIn(true)}}
          // onClick={() => {setModal(true)}}
        >
          <PiUser className={s.icon} />
          Sign in
        </Button>
      </Link>
     
      <Link to='/registration_form' style={{textDecoration: 'none'}}>
        <Button 
          color='green' 
          style={btn_status_unauthuser}
          onClick={() => {setModalSignUp(true)}}
          // onClick={() => {setModal(true)}}
        >
          <PiUserPlus className={s.icon} />
          Sign up
        </Button>
      </Link>

      {/* <Link to={authUser.details.userType === 'producer' ? '/producer_account' : 'custommer_account'} style={{textDecoration: 'none'}}> */}
        <Button 
          color='green' 
          style={btn_status_authuser}
          onClick={navigate_to_account}
          >
          <PiUserGear className={s.icon} />
          Your profile
        </Button>
      {/* </Link>     */}
      
      <Link to='/' style={{textDecoration: 'none'}}>
        <Button 
          color='green' 
          style={btn_status_authuser}
          onClick={sign_out}
          >
          <PiUserMinus className={s.icon} />
          Sign out
        </Button>
      </Link>    
     
      
      <AiOutlineMenuFold className={s.menu_icon} onClick={set_menu_active} />
      </div>

      <div className={[s.nav_menu, menuActive ? s.is_active : ''].join(' ')}>
        
        <div className={s.close_icon_container}>
          <VscChromeClose className={s.icon_close} onClick={set_menu_active} />
          
        </div>

        <div className={s.menu_items_container}>
          <Link to='/' onClick={set_menu_active}>{'Home'.toUpperCase()}</Link>
          <Link to='about_us' onClick={set_menu_active}>{'About us'.toUpperCase()}</Link>  
          <Link to='map' onClick={set_menu_active}>{'Packaging producers'.toUpperCase()}</Link> 
          <Link onClick={set_menu_active}>{'Why ecopackaging'.toUpperCase()}</Link>
          {/* <Link to='/' onClick={set_menu_active}>{'Ecopackaging Search'.toUpperCase()}</Link>  */}
        </div>

        <div className={s.contacts_container}>
          <Link onClick={set_menu_active}>email address</Link> 
          <Link onClick={set_menu_active}>phone number</Link>
          <Link onClick={set_menu_active}>cocial media</Link>
        </div>
        
      </div>
    </nav>
  )
}
