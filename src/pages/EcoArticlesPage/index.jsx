import React from 'react';
import s from './index.module.css';
import { articles } from './data/articles';
import ArticleBlock from '../../components/ArticleBlock';


export default function EcoArticlesPage() {
  return (
    <div className={s.eco_articles_page}>
      {
        articles.map(el => <ArticleBlock key={el.id} {...el}/>)
      }
    </div>
  )
}


{/* {
        articles.map(el => {
          if(el.id % 2 === 0) {
            return <ArticleBlockEven key={el.id} {...el} />
          } else {
            return <ArticleBlockOdd key={el.id} {...el} />
          }
        })
    } */}