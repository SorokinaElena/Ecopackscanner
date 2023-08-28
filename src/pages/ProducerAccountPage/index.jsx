import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context';

export default function ProducerAccountPage() {

    const { userInfo, setUserInfo } = useContext(Context);

    console.log(userInfo);

  return (
    <div>
        <p>ProducerAccountPage</p>
        <Link to='/'>
            <button>exit</button>
        </Link>
    </div>
  )
}
