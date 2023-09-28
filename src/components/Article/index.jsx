import React from 'react';
import s from './index.module.css';
import Button from '../Button';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../../pages/EcoArticlesPage/data/articles';
import { PiSkipBackLight } from 'react-icons/pi';
import { PiSkipBackBold } from 'react-icons/pi';


export default function Article() {

  const {id} = useParams();
  console.log(id);

 const target_article_arr = articles.filter(el => el.id == id);
 const target_article_obj = target_article_arr[0];
 console.log(target_article_obj)
  const { title, img } = target_article_obj;


  return (
    <div className={s.article}>
      <div className={s.article_content}>
        <h2 className={s.title}>{title.toUpperCase()}</h2>
        {
          target_article_obj.subtitle.map((el, index) => (
            <div key={index}>
              <p className={s.subtitle}>{el}</p>
              <p className={s.text}>{target_article_obj.text[index]}</p>
            </div>
          ))
        }
      </div>
      <Link to='/why_ecopackaging'>
        <Button color='grey'><PiSkipBackBold className={s.icon}/> back to articles</Button>
      </Link>
      
    </div>
  )
}

{/* <div className={s.custommer_account_page}>
      <img className={s.pack_search_img} src={pack_search_img} alt="close-up-sustainable-coffee-cup-alternatives" />
      <div className='content_container'>
        <h2 className='page_title'>Personal account: customer </h2>
        <p>user name: {authUser.details.companyName}</p>  
        <p>user type: {authUser.details.userType}</p> 
        <p>user id: {authUser.details._id}</p> 
        <p>points value: three points</p>
        <Link to='/pack_search'>
          <Button color='grey'>search for ecopackaging</Button>
        </Link>
        <Link to='/subscription'>
          <Button color='grey'>buy points</Button>
        </Link>
      </div>
    </div> */}
