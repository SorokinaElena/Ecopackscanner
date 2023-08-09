import React from 'react';
import s from './index.module.css';
import about_us_img from '../../media/about_us_img_eco-friendly-disposable-tableware-cups_small.png';
import { Link } from 'react-router-dom';

export default function AboutUsPage() {
  return (
    <div className={s.about_us_page}>
      <img className={s.about_us_img} src={about_us_img} alt="eco-friendly-disposable-tableware-cups" />
      <div className={s.descr_container}>
        <p>
        The mission of our project is to provide a web-application that enables users to easily search for and find environmentally friendly packaging options. Our goal is to promote sustainability and help businesses make informed decisions by connecting them with suppliers of eco-friendly packaging solutions. Through our platform, we aim to simplify the process of selecting sustainable packaging materials, ultimately contributing to a greener and more environmentally conscious business landscape.
        </p> 
        <Link to='/pack_search'>
          <button>search for ecopackaging</button>
        </Link> 
      </div>
    </div>
  )
}
