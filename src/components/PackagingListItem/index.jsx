import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';
import { IoIosCloseCircle } from 'react-icons/io';
import formService from '../../services/form.service';


export default function PackagingListItem({ index }) {

    const { packagingList, setPackagingList } = useContext(Context);

    const delete_packaging_item = (index) => {
        // console.log(packagingList[index].user);
        // console.log(packagingList[index]._id);
        const target_packaging_item = {
            userId: packagingList[index].user,
            packageId: packagingList[index]._id,
        };
        console.log(target_packaging_item);
        formService.delete_package(target_packaging_item);
        
    }


  return (
    <div className={s.packaging_list_item}>
        <div><IoIosCloseCircle className={s.icon} onClick={() => {delete_packaging_item(index)}}/></div>
        <p>Product Category: <span className={s.content}>{packagingList[index].category}</span> </p>
        <p>Packaging Name: <span className={s.content}>{packagingList[index].name}</span> </p>
        <p>Packaging Size: <span className={s.content}>{packagingList[index].estimatedSize}</span> </p>
        <p>Product Type:</p>
          <div className={s.features}>
            <p>{packagingList[index].fragile === true ? 'fragile' : ''}</p>
            <p>{packagingList[index].granules === true ? 'granules' : ''}</p>
            <p>{packagingList[index].liquid === true ? 'liquid' : ''}</p>
            <p>{packagingList[index].perishable === true ? 'perishable' : ''}</p>
            <p>{packagingList[index].powder === true ? 'powder' : ''}</p>
            <p>{packagingList[index].solid === true ? 'solid' : ''}</p>
            <p>{packagingList[index].otherType !== '' ? packagingList[0].otherType : ''}</p>
          </div>
        <p>Packaging Type:</p>
          <div className={s.features}>
            <p>{packagingList[index].flexible === true ? 'flexible' : ''}</p>
            <p>{packagingList[index].opaque === true ? 'opaque' : ''}</p>
            <p>{packagingList[index].protective === true ? 'protective' : ''}</p>
            <p>{packagingList[index].rigid === true ? 'rigid' : ''}</p>
            <p>{packagingList[index].transparent === true ? 'transparent' : ''}</p>
            <p>{packagingList[index].otherPackagingType !== '' ? packagingList[0].otherPackagingType : ''}</p>
          </div>
        <p>Sustainability level:</p>
          <div className={s.features}>
            <p>{packagingList[index].biodegradable === true ? 'biodegradable' : ''}</p>
            <p>{packagingList[index].compostable === true ? 'compostable' : ''}</p>
            <p>{packagingList[index].recyclable === true ? 'recyclable' : ''}</p>
            <p>{packagingList[index].reusable === true ? 'reusable' : ''}</p>
            <p>{packagingList[index].otherSustainability !== '' ? packagingList[0].otherSustainability : ''}</p>
          </div>
    </div>
  )
}