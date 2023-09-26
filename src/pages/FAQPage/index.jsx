import React from 'react';
import s from './index.module.css';
import faq_img from '../../media/faq_img_papercraft_3_small.png';
import { faq_list } from './data/faq_list';
import FAQItem from '../../components/FAQItem';

export default function FAQPage() {
  return (
    <div className={s.faq_page}>
      <img className={s.faq_img} src={faq_img} alt="papercraft image" />
      <div className={s.content_container}>
        {
          faq_list.map(el => <FAQItem key={el.id} {...el}/>)
        }
      </div>
    </div>
  )
}
