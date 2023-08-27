import React, { useContext } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import Button from '../Button';
import { Context } from '../../context';
import { AiOutlineMenuFold } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';

export default function Nav() {

  const { modal, setModal } = useContext(Context);

  return (
    <nav className={s.nav}>
      {/* <Link to='about_us'>About us</Link>  
      <Link>Packaging producers</Link> 
      <Link>Why ecopackaging</Link> */}
      <Link to='/login_form' style={{textDecoration: 'none'}}>
        <Button 
          color='green' 
          onClick={() => {setModal(true)}}
        >
          <VscAccount className={s.icon} />
          Sign in
        </Button>
      </Link>
      <AiOutlineMenuFold className={s.menu_icon}/>
    </nav>
  )
}
