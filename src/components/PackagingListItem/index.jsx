import React, { useContext } from 'react';
import s from './index.module.css';
import { Context } from '../../context';

export default function PackagingListItem({ index }) {

    const { packagingList, setPackagingList } = useContext(Context);

  return (
    <div className={s.packaging_list_item}>
        <p>Product Category: {packagingList[index].category}</p>
        <p>Packaging Name: {packagingList[index].name}</p>
        <p>Packaging Size: {packagingList[index].estimatedSize}</p>
        <p>Product Type:</p>
          <div>
            <p>{packagingList[index].fragile === true ? 'fragile' : ''}</p>
            <p>{packagingList[index].granules === true ? 'granules' : ''}</p>
            <p>{packagingList[index].liquid === true ? 'liquid' : ''}</p>
            <p>{packagingList[index].perishable === true ? 'perishable' : ''}</p>
            <p>{packagingList[index].powder === true ? 'powder' : ''}</p>
            <p>{packagingList[index].solid === true ? 'solid' : ''}</p>
            <p>{packagingList[index].otherType !== '' ? packagingList[0].otherType : ''}</p>
          </div>
        <p>Packaging Type:</p>
          <div>
            <p>{packagingList[index].flexible === true ? 'flexible' : ''}</p>
            <p>{packagingList[index].opaque === true ? 'opaque' : ''}</p>
            <p>{packagingList[index].protective === true ? 'protective' : ''}</p>
            <p>{packagingList[index].rigid === true ? 'rigid' : ''}</p>
            <p>{packagingList[index].transparent === true ? 'transparent' : ''}</p>
            <p>{packagingList[index].otherPackagingType !== '' ? packagingList[0].otherPackagingType : ''}</p>
          </div>
        <p>Sustainability level:</p>
          <div>
            <p>{packagingList[index].biodegradable === true ? 'biodegradable' : ''}</p>
            <p>{packagingList[index].compostable === true ? 'compostable' : ''}</p>
            <p>{packagingList[index].recyclable === true ? 'recyclable' : ''}</p>
            <p>{packagingList[index].reusable === true ? 'reusable' : ''}</p>
            <p>{packagingList[index].otherSustainability !== '' ? packagingList[0].otherSustainability : ''}</p>
          </div>
    </div>
  )
}