import React, { useContext } from 'react';
import s from './index.module.css';
// import home_img from '../../media/home_img_cartoon-concept-recycle.png';
import home_img from '../../media/home_img_bag_small.jpg';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { Context } from '../../context';


export default function HomePage() {

const { pageName, setPageName } = useContext(Context);
setPageName('home_page');
console.log(pageName);


  return (
    <div className={s.home_page}>
      <img className={s.home_img} src={home_img} alt="cartoon-concept-recycle" />
      <div className={s.choice_btns_container}>
        <Link to='producer_data_form'>
          <Button color='grey'><AiOutlineCodeSandbox className={s.icon} /> Producer</Button>
        </Link>
        <Link to='pack_search'>
          <Button color='grey'><AiOutlineCodepen className={s.icon}/> Customer</Button>
        </Link>
      </div>
    </div>
  )
}
