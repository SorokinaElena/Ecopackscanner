import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import authService from '../../services/auth.service';
import Button from '../../components/Button';
import pack_search_img from '../../media/pack_search_img_close-up-sustainable-coffee-cup-alternatives_3_small.png';


export default function CustomerAccountPage() {

  const { user, setUser, isAuthUser, setIsAuthUser, authUser, setAuthUser } = useContext(Context); 

  useEffect(() => {
    const current_user = authService.getCurrentUser();
    if(current_user) setAuthUser(current_user);
  }, []);
  

  return (
    <div className={s.custommer_account_page}>
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
    </div>
  )
}