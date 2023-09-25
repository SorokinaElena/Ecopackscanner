import React from 'react';
import { Link } from 'react-router-dom';

export default function FormProducerInfo() {
  return (
    <div>
        <p>FormProducerInfo</p>
        <p>web site address</p>
        <p>contacts</p>
        <p>location - </p>
        <Link to='/producer_account'>back to personal account</Link>
    </div>
  )
}
