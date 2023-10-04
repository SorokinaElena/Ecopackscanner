import React, { useEffect, useContext } from 'react';
import s from './index.module.css';
import { Link } from 'react-router-dom';
import PackagingListItem from '../../components/PackagingListItem';
import Button from '../../components/Button';
import formService from '../../services/form.service';
import { Context } from '../../context';


export default function PackagesListPage() {

  const { packagingList, setPackagingList } = useContext(Context);

  useEffect(() => {
    const current_search_res = formService.get_current_packaging_list();
    if(current_search_res) setPackagingList(current_search_res);
  }, []);

  console.log(packagingList);

// const pakaging_list = formService.get_packaging_list()

  return (
    <div className={s.background}>
      <div className={['content_container', s.content_container].join(' ')}>
        <p className='page_title'>{'Packages list'.toUpperCase()}</p>
        {
          packagingList.length > 0
          ? packagingList.map(el => <PackagingListItem key={el._id} {...el} index={packagingList.indexOf(el)} />)
          : 'No items added'
        }
        <Link to='/pack_search'>
          <Button color='grey'>add new packaging</Button>
        </Link>
      </div>
    </div>
  )
}