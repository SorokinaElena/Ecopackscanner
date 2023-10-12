import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';


export default function Packaging({ index, additional_search_params}) {

  const navigate = useNavigate();

  const { packaging, setPackaging, isAuthUser, setIsAuthUser } = useContext(Context);

  const get_offer = () => {

  }

    
  return (
    <div className={s.packaging}>
      {/* {
        isAuthUser === true
        ?
          <> */}
            {/* <p>Company name: {packaging[index].user.companyName}</p> */}
            <p>Packaging producer's location:</p>
            <p style={{paddingLeft: '20px'}}>{packaging[index].user.country}</p>
            {/* <p>Address: {packaging[index].user.adress}</p> */}
            {/* <p>Email: {packaging[index].user.email}</p> */}
            {/* <p>Website: {packaging[index].user.website}</p> */}
            <p style={{marginTop: '20px'}}>search tags:</p>
              {
                additional_search_params[index].length > 0
                ? additional_search_params[index].map(el => <p key={el} style={{paddingLeft: '20px'}}>{`#${el}`}</p>)
                : <p style={{paddingLeft: '20px'}}># unspecified</p> 
              }
          {/* </> */}
        {/* : <>
            <p><span className='page_title'>{packaging.length}</span> offers(s) found</p>
            <p>search tags:</p>
              {
                additional_search_params.length > 0
                ? additional_search_params[index].map(el => <p key={el} style={{paddingLeft: '20px'}}>{`#${el}`}</p>)
                : <p style={{paddingLeft: '20px'}}># unspecified</p> 
              }
          </>      */}
      {/* } */}
      
      <div className={s.button_container}style={{marginTop: '30px'}}>
        <Button color='green' onClick={get_offer}>get an offer</Button>
      </div>

    </div>
  )
}