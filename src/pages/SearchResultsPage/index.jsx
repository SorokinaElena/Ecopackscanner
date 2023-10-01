import React, { useContext, useEffect } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import Packaging from '../../components/Packaging';
import pack_search_img from '../../media/pack_search_img_close-up-sustainable-coffee-cup-alternatives_3_small.png';
import Button from '../../components/Button';
import { Context } from '../../context';
import formService from '../../services/form.service';


export default function SearchResultsPage() {

  const { packaging, setPackaging, reqData, setReqData } = useContext(Context);
  
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

 
  let additional_search_params = [];

  const get_true_pack_params = (packaging) => {
    const result = [];
    if(packaging[0]) {
      const packaging_value = packaging.length;
      for(let i = 0; i < packaging_value; i++) {
        const obj = packaging[i]
        const keys = Object.keys(obj);
        for(let j = 0; j < keys.length; j++) {
          const key = keys[j];
          if(obj[key] === true && !result.includes(key)) {
            result.push(key)
        }
      }
    }
  }    
    return result;
}

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

  additional_search_params = get_true_pack_params(packaging);   
  console.log(additional_search_params);

  
  
    
  return (
    <div className={s.search_results_page}>
      <img className={s.pack_search_img} src={pack_search_img} alt="close-up-sustainable-coffee-cup-alternatives" />
      <div className={['content_container', s.content_container].join(' ')}>
        <h2 className='page_title'>{'Search results for an ecopackaging'.toUpperCase()}</h2>
        <div className={s.description}>
            <p>According to your request</p>
            <p>for a products from category <span className='page_title'>{reqData.category}</span></p>
            <p>with the maximum size of the largest side up to - <span className='page_title'>{reqData.estimatedSize}</span></p>

            {/* <p>additional parameters for product type and packaging type at the search:</p>
            {
              additional_search_params.map(el => <p key={el} style={{paddingLeft: '20px'}}>{`#${el}`}</p>)
            } */}

        </div>

        {
          packaging.length > 0
          ? packaging.map(el => <Packaging key={el.id} {...el} index={packaging.indexOf(el)} additional_search_params={additional_search_params}/>)
          : <p> No products matching your search criteria were found, please try refining your criteria and searching again</p>
        }
        
        <Link to='/pack_search'>
          <Button color='grey'>new search</Button>
        </Link>
      </div>
    </div>
  )
}