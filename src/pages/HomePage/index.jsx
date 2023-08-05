import React from 'react';
import s from './index.module.css';
// import home_img from '../../media/home_img_cartoon-concept-recycle.png';
import home_img from '../../media/home_img_bag.jpg';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className={s.home_page}>
      <img className={s.home_img} src={home_img} alt="cartoon-concept-recycle" />
      <h1>I'm a packaging</h1>
      <div className={s.choice_btns_container}>
        <Link to='producer_data_form'><button>producer</button></Link>
        <Link to='pack_search'><button>customer</button></Link>
      </div>
    </div>
  )
}
