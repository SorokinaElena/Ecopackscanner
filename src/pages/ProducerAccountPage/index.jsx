import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import authService from '../../services/auth.service';
import Button from '../../components/Button';

export default function ProducerAccountPage() {

  const { user, setUser } = useContext(Context);
  console.log(user);  

  return (
    <div>
        <p>ProducerAccountPage</p>
        <p>user name: {user.email}</p>   
    </div>
  )
}
