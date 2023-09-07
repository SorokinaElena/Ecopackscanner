import React, { useContext } from 'react';
import s from './index.module.css';
import pack_search_img from '../../media/pack_search_img_close-up-sustainable-coffee-cup-alternatives_3_small.png';
import { Context } from '../../context';
import FormSearchPack from '../../components/FormSearchPack';

export default function PackSearchPage() {

  // const { pageName, setPageName } = useContext(Context);
  // setPageName('pack_search_page')
  // console.log(pageName);


  return (
    <div className={s.pack_search_page}>
      <img className={s.pack_search_img} src={pack_search_img} alt="close-up-sustainable-coffee-cup-alternatives" />
      <FormSearchPack />
    </div>
  )
}
