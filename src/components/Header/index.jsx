import React from 'react';
import s from './index.module.css';
import Nav from '../Nav';
import logo from '../../media/logo.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className={s.header}>
      <Link to='/' className={s.logo}>
        <img src={logo} alt="Logo" />
      </Link>
      <Nav />
    </header>
  )
}
