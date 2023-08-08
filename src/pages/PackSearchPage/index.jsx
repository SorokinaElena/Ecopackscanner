import React from 'react';
import s from './index.module.css';
import pack_search_img from '../../media/pack_search_img_close-up-sustainable-coffee-cup-alternatives_3.png';

export default function PackSearchPage() {
  return (
    <div className={s.pack_search_page}>
      <img className={s.pack_search_img} src={pack_search_img} alt="close-up-sustainable-coffee-cup-alternatives" />
    </div>
  )
}
