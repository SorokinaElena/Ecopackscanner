import React from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import Packaging from '../../components/Packaging';
import pack_search_img from '../../media/pack_search_img_close-up-sustainable-coffee-cup-alternatives_3_small.png';
import Button from '../../components/Button';


export default function SearchResultsPage() {
  return (
    <div className={s.search_results_page}>
      <img className={s.pack_search_img} src={pack_search_img} alt="close-up-sustainable-coffee-cup-alternatives" />
      <div className='content_container'>
        <p>Search results:</p>
        <Packaging />
        <Packaging />
        <Packaging />
        <Packaging />
        <Link to='/pack_search'>
          <Button color='grey'>new search</Button>
        </Link>
      </div>
    </div>
  )
}