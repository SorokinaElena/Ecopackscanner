import React from 'react';
import { Link } from 'react-router-dom';
import Packaging from '../Packaging';

export default function PackagesList() {
  return (
    <div>
        <p>PackagesList</p>
        <p><Link to='/producer_account'>back to personal account</Link></p>
        <p><Link to='/pack_search'>add new packaging</Link></p>
        <Packaging />
        <Packaging />
        <Packaging />
        <Packaging />
        
    </div>
  )
}
