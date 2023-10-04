import React, { useContext } from 'react';
import s from './index.module.css';
import Nav from '../Nav';
// import logo from '../../media/logo.svg';
import logo from '../../media/logo_phaeos.png';
import logo_1 from '../../media/logo_phaeos_1.png';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

export default function Header() {

const { pageName, setPageName } = useContext(Context);

  return (
    <header className={s.header}>
      {/* {
        pageName === 'home_page'
        ? <div className={s.logo_container}>
        <Link to='/' className={s.logo_main}>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      : <div className={s.logo_container}>
      <Link to='/' className={s.logo}>
        <img src={logo_1} alt="Logo" />
      </Link>
    </div>
      } */}
      <Link to='/' className={s.logo}>
        <img src={logo_1} alt="Logo" />
      </Link>
      <Nav />
    </header>
  )
}

// https://www.iloveimg.com/