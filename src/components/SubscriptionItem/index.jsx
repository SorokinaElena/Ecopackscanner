import React from 'react';
import s from './index.module.css';
import Button from '../Button';


export default function SubscriptionItem({ title, essential_features, advanced_features, advanced_features_plus, price, id }) {

const subscribe = (id) => {
    const target_subscribe = {
        id: id,
    }
    console.log(target_subscribe)
};

  return (
    <div className={s.subscription_item}>
        <div>
            <h2>{title}</h2>
            <h3>Essential Features:</h3>
            <p>{essential_features}</p>
            {
                advanced_features.length > 0 
                ? <>
                    <h3>Advanced Features:</h3>
                    {
                    advanced_features.map(el => <p key={el}>{el}</p>)
                    }  
                </>
                : ''
            }
            {
                advanced_features_plus.length > 0 
                ? <>
                    <h3>Advanced Features +:</h3>
                    {
                    advanced_features_plus.map(el => <p key={el}>{el}</p>)
                    }  
                </>
                : ''
            }
        </div>
        <div>
            <form action='/create-checkout-session' method='POST'>
                {/* Add a hidden field with the lookup_key of your Price */}
                <input type='hidden' name='lookup_key' value={id} />
                <Button color='green' /*onClick={() => {subscribe(id)}}*/ id='checkout-and-portal-button' type='submit'>
                    {price}
                </Button>
            </form>
        </div>
    </div>
  )
}