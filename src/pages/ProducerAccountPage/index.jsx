import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../../context';
import authService from '../../services/auth.service';
import Button from '../../components/Button';
import formService from '../../services/form.service';


export default function ProducerAccountPage() {

  const navigate = useNavigate();

  const { user, setUser, isAuthUser, setIsAuthUser, authUser, setAuthUser } = useContext(Context); 

  useEffect(() => {
    const current_user = authService.getCurrentUser();
    if(current_user) setAuthUser(current_user);
  }, []);

  const submit = (data) => {
    console.log(data);
    formService.pack_list_req(data);
    formService.get_current_packaging_list();
  }

  return (
    <div className={s.background}>
      <div className='content_container'>
        <h2 className='page_title'>Personal account: producer</h2>
        <p>user name: {authUser.details.companyName}</p>  
        <p>user type: {authUser.details.userType}</p> 
        <p>user id: {authUser.details._id}</p> 
        <p>points value: three points</p>
        <Link to='/pack_search'>
          <Button color='grey'>add ecopackaging</Button>
        </Link>
        <Link to='packages_list'>
          <Button color='grey' onClick={() => {submit(authUser.details._id)}}>my packaging list</Button>
        </Link>
        <Link to='/subscription'>
          <Button color='grey'>buy points</Button>
        </Link>
      </div>
    </div>
  )
}


{/* <p><Link to='producer_info'>add more information about your company</Link> </p>
<p><Link to='packages_list'>the packages you added (Packages List)</Link> </p> */}