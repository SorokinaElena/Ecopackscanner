import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
// import home_img from '../../media/home_img_cartoon-concept-recycle.png';
import home_img from '../../media/home_img_bag_small.jpg';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import { AiOutlineCodeSandbox } from 'react-icons/ai';
import { AiOutlineCodepen } from 'react-icons/ai';
import { Context } from '../../context';


export default function HomePage() {

  const navigate = useNavigate();

  const { userType, setUserType, isAuthUser, setIsAuthUser, authUser, setAuthUser } = useContext(Context);
// const { pageName, setPageName } = useContext(Context);
// setPageName('home_page');
// console.log(pageName);


const get_unauthuser_type = (event) => {
  const button_name = event.target.id;
  setUserType(button_name);
  if(isAuthUser === false) {
    navigate('/pack_search')
  } else if(authUser.details.userType === 'producer') {
    navigate('/producer_account')
  } else {
    navigate('/customer_account')
  }
}; 

useEffect(() => {
    sessionStorage.setItem('userType', JSON.stringify(userType));
  }, [userType]
);


  return (
    <div className={s.home_page}>
      <img className={s.home_img} src={home_img} alt="cartoon-concept-recycle" />
      <div className={s.choice_btns_container}>
        {
          isAuthUser === false || authUser.details.userType === 'producer'
          ? <Button id='producer' color='grey_main_page' onClick={get_unauthuser_type}><AiOutlineCodeSandbox className={s.icon} /> Producer</Button>
          : ''
        }
          
        {
          isAuthUser === false || authUser.details.userType === 'customer'
          ? <Button id='customer' color='grey_main_page' onClick={get_unauthuser_type}><AiOutlineCodepen className={s.icon}/> Customer</Button>
          : ''
        }
      </div>
    </div>
  )
}

// вы можете посмотреть, что предлагают другие компаниию Чтобы слелать свое предложение - зарегистрируйтесь и добавьте свою продукцию, чтобы ее могли видеть наши пользователт-покупатели
