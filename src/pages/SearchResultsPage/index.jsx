import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import Packaging from '../../components/Packaging';
import Button from '../../components/Button';
import { Context } from '../../context';
import formService from '../../services/form.service';


export default function SearchResultsPage() {

  const { packaging, setPackaging, reqData, setReqData, isAuthUser, setIsAuthUser } = useContext(Context);
  
  // console.log(formService.get_current_search_res());
  useEffect(() => {
    const current_search_res = formService.get_current_search_res();
    if(current_search_res) setPackaging(current_search_res);
  }, []);

  console.log(packaging);
  console.log(reqData);

  // let obj_arr = [];
  // let obj = {};
  // if(packaging[0]) {
  //   const packaging_value = packaging.length;
  // console.log(packaging);
  // console.log(packaging[0]);
  // console.log(packaging[0].user.companyName);
  // console.log(packaging[0].category);
  // console.log(packaging[0].estimatedSize);
  // console.log(packaging[0].liquid);
  //   for(let i = 1; i < packaging_value; i++) {
  //     obj = packaging[i]
  //   }
    
  // };
  // console.log(obj);

 
  // let additional_search_params = [];

  const get_true_pack_params = (packaging) => {
    const result = [];
    if(packaging.length >  0) {
      const packaging_value = packaging.length;
      for(let i = 0; i < packaging_value; i++) {
        let additional_search_params = [];
        const obj = packaging[i]
        const keys = Object.keys(obj);
        for(let j = 0; j < keys.length; j++) {
          const key = keys[j];
          if(obj[key] === true && !additional_search_params.includes(key)) {
            additional_search_params.push(key)
        }
      }
      result.push(additional_search_params);
    }
  }    
    return result;
};

const get_true_pack_params_from_req = (reqData) => {
  const result = [];
  if(reqData) {
    
   
           
     
      const keys = Object.keys(reqData);
      for(let j = 0; j < keys.length; j++) {
        const key = keys[j];
        if(reqData[key] === true) {
          result.push(key)
      }
    }
    
  
}    
  return result;
};

//     const keys = Object.keys(obj);
//     console.log(keys);
//     const result = [];
//     for(let i = 0; i < keys.length; i++) {
//       const key = keys[i];
//       console.log(target_param)
//       console.log(packaging[0][`${target_param}`])
//       target_params.push(target_param)
//       if(obj[key] === true) {
//         result.push(key)
//     }
//   }
//   return result;
// };

  const additional_search_params = get_true_pack_params(packaging);   
  console.log(additional_search_params);

  const additional_search_params_from_req = get_true_pack_params_from_req(reqData);   
  console.log(additional_search_params_from_req);

  
  return (
    <div className={s.background}>
      <div className={['content_container', s.content_container].join(' ')}>
        <h2 className='page_title'>{'Search results for an ecopackaging'.toUpperCase()}</h2>
        <div className={s.description}>
            <p>According to your request</p>
            <p>for a products from category <span className='page_title'>{reqData.category}</span></p>
            <p>with the maximum size of the largest side up to - <span className='page_title'>{reqData.estimatedSize}</span></p>
        </div>
        {
          packaging.length > 0
          ? isAuthUser === true
            ? packaging.map(el => <Packaging key={el.id} {...el} index={packaging.indexOf(el)} additional_search_params={additional_search_params}/>)
            : <>
                <p><span className='page_title'>{packaging.length}</span> offers(s) found</p>
                <p>search tags:</p>
                  {
                    additional_search_params.length > 0
                    ? additional_search_params_from_req.map(el => <p key={el} style={{paddingLeft: '20px'}}>{`#${el}`}</p>)
                    : <p style={{paddingLeft: '20px'}}># unspecified</p> 
                  }
              </>  
          : <p> No products matching your search criteria were found, please try refining your criteria and searching again</p>
        }
        
        <Link to='/pack_search'>
          <Button color='grey'>new search</Button>
        </Link>
      </div>
    </div>
  )
}