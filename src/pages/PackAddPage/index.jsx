import React, { useContext } from 'react';
import s from './index.module.css';
import pack_add_img from '../../media/pack_add_img_cartoon-concept-recycle_small.png';
import { Context } from '../../context';
import FormSearchPack1 from '../../components/FormSearchPack1';

export default function PackAddPage() {

  // const { pageName, setPageName } = useContext(Context);
  // setPageName('pack_search_page')
  // console.log(pageName);


  return (
    <div className={s.pack_search_page}>
      <img className={s.pack_search_img} src={pack_add_img} alt="close-up-sustainable-coffee-cup-alternatives" />
      <FormSearchPack1 />
    </div>
  )
}
