import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className={s.nav}>
      <Link to='about_us'>About us</Link>  
      <Link>Packaging producers</Link> 
      <Link>Why ecopackaging</Link>
      <Link>Log in</Link>
    </nav>
  )
}
