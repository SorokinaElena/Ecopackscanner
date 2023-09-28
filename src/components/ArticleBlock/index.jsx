import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';


export default function ArticleBlock({ id, title, img, link_text }) {
  return (
    <div className={s.article_block}>
      {
        id % 2 === 0
        ? <>
          <Link to={`${id}`}>
            <div>
              <h2 className='page_title'>{title}</h2>
              <div className={s.link_text}>{link_text}</div>
            </div>
          </Link>
          <Link to={`${id}`}><img src={img} alt="picture" /></Link>
          </>
        : <>
          <Link to={`${id}`}><img src={img} alt="picture" /></Link>
          <Link to={`${id}`}>
            <div>
              <h2 className='page_title'>{title}</h2>
              <div className={s.link_text}>{link_text}</div>
            </div>
          </Link>
          </>  
      }
    </div>
  )
}
