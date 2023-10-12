import React, { useEffect, useContext } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import PackagingListItem from '../../components/PackagingListItem';
import Button from '../../components/Button';
import formService from '../../services/form.service';
import { Context } from '../../context';
import { BiRefresh } from 'react-icons/bi';


export default function PackagesListPage() {

  const { packagingList, setPackagingList, authUser, setAuthUser } = useContext(Context);

  const submit = (data) => {
    console.log(data);
    formService.pack_list_req(data);
    const current_search_res = formService.get_current_packaging_list();
    if(current_search_res) setPackagingList(current_search_res);
  }

  useEffect(() => {
    const current_search_res = formService.get_current_packaging_list();
    // const current_search_res = formService.pack_list_req(authUser.details._id);
    if(current_search_res) setPackagingList(current_search_res);
  }, [setPackagingList]);

  console.log(packagingList);

// const pakaging_list = formService.get_packaging_list()

  return (
    <div className={s.background}>
      <div className={['content_container', s.content_container].join(' ')}>
        <div>
          <p className='page_title'>{'Packages list'.toUpperCase()}</p>
          <BiRefresh className={s.refresh_icon} onClick={() => {submit(authUser.details._id)}} />
        </div>
        {
          packagingList.length > 0
          ? packagingList.map(el => <PackagingListItem key={el._id} {...el} index={packagingList.indexOf(el)} />)
          : <p>No items added</p> 
        }
        <Link to='/pack_search'>
          <Button color='grey'>add new packaging</Button>
        </Link>
      </div>
    </div>
  )
}