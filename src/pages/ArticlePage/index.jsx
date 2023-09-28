import React from 'react'
import Article from '../../components/Article'


export default function ArticlePage() {
  return (
    <div className={s.article_page}>
      <Article />
      <Link to='/why_ecopackaging'>
        <Button color='grey'>back to articles</Button>
      </Link>
    </div>
  )
}