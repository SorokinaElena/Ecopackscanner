import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import authService from '../../services/auth.service';
import Button from '../../components/Button';


export default function CustomerAccountPage() {

  const { user, setUser, isAuthUser, setIsAuthUser, authUser, setAuthUser } = useContext(Context);
  // console.log(user); 

  useEffect(() => {
    const current_user = authService.getCurrentUser();
    if(current_user) setAuthUser(current_user);
  }, []);
  
  // console.log(authUser);

  return (
    <div>
        <p>CustomerAccountPage</p>
        <p>user name: {authUser.details.companyName}</p>   
        <p>user type: {authUser.details.userType}</p> 
        <p>user id: {authUser.details._id}</p> 
    </div>
  )
}
