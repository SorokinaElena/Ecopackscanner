import React, { useContext } from 'react';
import { Context } from '../../context';

export default function CustomerAccountPage() {

  const { userInfo, setUserInfo } = useContext(Context);

  console.log(userInfo);

  return (
    <div>
    <p>CustomerAccountPage</p>
    <Link to='/'>
        <button>exit</button>
    </Link>
</div>
  )
}
