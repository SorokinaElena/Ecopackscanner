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

  const { userType, setUserType } = useContext(Context);
// const { pageName, setPageName } = useContext(Context);
// setPageName('home_page');
// console.log(pageName);

const get_unauthuser_type = (event) => {
  const button_name = event.target.id;
  console.log(button_name);
  if(button_name === 'producer') {
    setUserType(button_name);
  }
  if(button_name === 'customer') {
    setUserType(button_name);
  }
}; 



  return (
    <div className={s.home_page}>
      <img className={s.home_img} src={home_img} alt="cartoon-concept-recycle" />
      <div className={s.choice_btns_container}>
        <Link to='pack_search'>
          <Button id='producer' color='grey_main_page' onClick={get_unauthuser_type}><AiOutlineCodeSandbox className={s.icon} /> Producer</Button>
        </Link>
        <Link to='pack_search'>
          <Button id='customer' color='grey_main_page' onClick={get_unauthuser_type}><AiOutlineCodepen className={s.icon}/> Customer</Button>
        </Link>
      </div>
    </div>
  )
}
