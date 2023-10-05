import React from 'react';
import s from './index.module.css';
import { subscription_packages } from './data/subscription_packages';
import SubscriptionItem from '../../components/SubscriptionItem';


export default function SubscriptionPage() {
  return (
    <div className={s.background}>
      {
        subscription_packages.map(el => <SubscriptionItem key={el.id} {...el}/>)
      }
    </div>
  )
}