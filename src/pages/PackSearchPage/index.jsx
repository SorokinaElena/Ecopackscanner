import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
import { Context } from '../../context';
import FormSearchPack1 from '../../components/FormSearchPack1';

export default function PackSearchPage() {

  const { isAuthUser, setIsAuthUser, userType, setUserType } = useContext(Context);
  console.log(userType);
  console.log(isAuthUser);

  useEffect(() => {
    sessionStorage.setItem('userType', JSON.stringify(userType));
  }, [userType]
);


  return (
    <div className={s.background}>
      <div className='content_container'>
        {
          (isAuthUser === false && userType === 'customer')
          ? <div className={s.p_container}>
              <p>Fill out the search form to see if we have the suitable packaging for you. In order to get the full information about packaging and packaging producers we kindly recommend you to sign up.</p>
            </div>
          : ''
        }
        {
          (isAuthUser === false && userType === 'producer')
          ? <div className={s.p_container}>
              <p>Fill out the search form to see offers for a different type of packaging. Perhaps no other producer offers this type of packaging and you will be the first. Don't miss the opportunity to sign in and add your offers to the base to make them available to your future customers.</p>
            </div>
          : ''
        }
        <FormSearchPack1 /> 
      </div>
    </div>
  )
}