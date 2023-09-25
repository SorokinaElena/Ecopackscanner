import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
import about_us_img from '../../media/about_us_img_eco-friendly-disposable-tableware-cups_small.png';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import { Context } from '../../context';

export default function AboutUsPage() {

  // const { pageName, setPageName } = useContext(Context);
  // setPageName('about_us_page')
  // console.log(pageName);

  const { userType, setUserType } = useContext(Context);

  useEffect(() => {
    sessionStorage.setItem('userType', JSON.stringify(userType));
  }, [userType]
);

  return (
    <div className={s.about_us_page}>
      <img className={s.about_us_img} src={about_us_img} alt="eco-friendly-disposable-tableware-cups" />
      <div className={s.descr_container}>
        <p>
        The mission of our project is to provide a web-application that enables users to easily search for and find environmentally friendly packaging options. Our goal is to promote sustainability and help businesses make informed decisions by connecting them with suppliers of eco-friendly packaging solutions. Through our platform, we aim to simplify the process of selecting sustainable packaging materials, ultimately contributing to a greener and more environmentally conscious business landscape.
        </p> 
        <Link to='/pack_search'>
          <Button color='grey'>search for ecopackaging</Button>
        </Link> 
      </div>
    </div>
  )
}
