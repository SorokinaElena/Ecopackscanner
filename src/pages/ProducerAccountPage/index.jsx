import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import authService from '../../services/auth.service';
import Button from '../../components/Button';
import pack_add_img from '../../media/pack_add_img_cartoon-concept-recycle_small.png';


export default function ProducerAccountPage() {

  const { user, setUser, isAuthUser, setIsAuthUser, authUser, setAuthUser } = useContext(Context); 

  useEffect(() => {
    const current_user = authService.getCurrentUser();
    if(current_user) setAuthUser(current_user);
  }, []);
  

  return (
    <div className={s.producer_account_page}>
      <img className={s.pack_search_img} src={pack_add_img} alt="close-up-sustainable-coffee-cup-alternatives" />
      <div className='content_container'>
        <p>ProducerAccountPage</p>
        <p>user name: {authUser.details.companyName}</p>  
        <p>user type: {authUser.details.userType}</p> 
        <p>user id: {authUser.details._id}</p> 

        <Link to='/pack_search'>
          <Button color='grey'>add ecopackaging</Button>
        </Link>
        <Link to='packages_list'>
          <Button color='grey'>my packaging list</Button>
        </Link>
      </div>
    </div>
  )
}


{/* <p><Link to='producer_info'>add more information about your company</Link> </p>
<p><Link to='packages_list'>the packages you added (Packages List)</Link> </p> */}