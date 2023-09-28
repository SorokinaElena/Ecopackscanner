import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import Packaging from '../Packaging';
import pack_add_img from '../../media/pack_add_img_cartoon-concept-recycle_small.png';
import Button from '../Button';


export default function PackagesListPage() {
  return (
    <div className={s.packages_list_page}>
      <img className={s.pack_search_img} src={pack_add_img} alt="close-up-sustainable-coffee-cup-alternatives" />
      <div className='content_container'>
        <p>Packages list</p>
        <Packaging />
        <Packaging />
        <Packaging />
        <Packaging />
        <Link to='/pack_search'>
          <Button color='grey'>add new packaging</Button>
        </Link>
      </div>
    </div>
  )
}