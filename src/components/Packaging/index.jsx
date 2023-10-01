import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';


export default function Packaging({ index, user_id, category, estimatedSize, length, width, height, weight, biodegradable, compostable, recyclable, reusable, otherSustainability, liquid, solid, powder, granules, fragile, perishable, otherType, flexible, rigid, protective, transparent, opaque, otherPackagingType, preservationNeeds, modifiedAtmospherePackaging, electrostaticDischargeProtection, tamperProtection, secureBatteriesForShipping, separateCordsAndAccessories, damageProtectionLevel, materialSensitivity, moistureProtection, leakproofRequirements, uvProtection, fragilityLevel, assemblyInstructions, materialCare, outdoor, indoor, durability, weatherproofing, additional_search_params}) {

  const { packaging, setPackaging, isAuthUser, setIsAuthUser } = useContext(Context);

  // let obj = {};
  //   if(packaging[0]) {
  //   console.log(packaging);
  //   console.log(packaging[0]);
  //   console.log(packaging[0].user.companyName);
  //   console.log(packaging[0].category);
  //   console.log(packaging[0].estimatedSize);
  //   console.log(packaging[0].liquid);
  //     obj = packaging[0]
  //   };
  //   console.log(obj);

  //   const get_true_pack_params = (obj) => {
  //     const keys = Object.keys(obj);
  //     console.log(keys);
  //     const result = [];
  //     for(let i = 0; i < keys.length; i++) {
  //       const key = keys[i];
     
  //       if(obj[key] === true) {
  //         result.push(key)
  //     }
  //   }
  //   return result;
  // };

  //   console.log(get_true_pack_params(obj));
    
  return (
    <div className={s.packaging}>
      {
        // packaging[0]
        isAuthUser === true
        ?
          <>
            <p>Company name: {packaging[index].user.companyName}</p>
            <p>Country: {packaging[index].user.country}</p>
            <p>Address: {packaging[index].user.adress}</p>
            <p>Email: {packaging[index].user.email}</p>
            {/* <p>Website: {packaging[0].user.website}</p> */}
            <p>search tags:</p>
              {
                additional_search_params.length > 0
                ? additional_search_params.map(el => <p key={el} style={{paddingLeft: '20px'}}>{`#${el}`}</p>)
                : <p style={{paddingLeft: '20px'}}># unspecified</p> 
              }
          </>
        : <>
            <p><span className='page_title'>{packaging.length}</span> offers(s) found</p>
            <p>search tags:</p>
              {
                additional_search_params.length > 0
                ? additional_search_params.map(el => <p key={el} style={{paddingLeft: '20px'}}>{`#${el}`}</p>)
                : <p style={{paddingLeft: '20px'}}># unspecified</p> 
              }
          </>     
        // : <p> No products matching your search criteria were found, please try refining your criteria and searching again</p>
      }
      {/* {
        (packaging[0] && isAuthUser === false)
        ? <>
          <p>According to your request {packaging.length} producers found</p>
          <p>search tags:</p>
            {
              additional_search_params.length > 0
              ? additional_search_params.map(el => <p key={el} style={{paddingLeft: '20px'}}>{`#${el}`}</p>)
              : <p style={{paddingLeft: '20px'}}># unspecified</p> 
            }
          </>
        : <p>No products matching your search criteria were found, please try refining your criteria and searching again</p>
      } */}
    </div>
  )
}
