import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';
import authService from '../../services/auth.service';

export default function ProducerAccountPage() {

  const { user, setUser } = useContext(Context);
  console.log(user);

  const user_info = authService.getCurrentUser();
  console.log(user_info);
  

  return (
    <div>
        <p>ProducerAccountPage</p>

        <Link to='/'>
            <button onClick={authService.logout}>exit</button>
        </Link>    
    </div>
  )
}
