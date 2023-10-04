import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';


export default function Packaging({ index, additional_search_params}) {

  const { packaging, setPackaging, isAuthUser, setIsAuthUser } = useContext(Context);

    
  return (
    <div className={s.packaging}>
      {/* {
        isAuthUser === true
        ?
          <> */}
            <p>Company name: {packaging[index].user.companyName}</p>
            <p>Country: {packaging[index].user.country}</p>
            <p>Address: {packaging[index].user.adress}</p>
            <p>Email: {packaging[index].user.email}</p>
            {/* <p>Website: {packaging[index].user.website}</p> */}
            <p>search tags:</p>
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
      
    </div>
  )
}