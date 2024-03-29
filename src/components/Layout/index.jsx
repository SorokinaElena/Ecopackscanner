import React from 'react';
import s from './index.module.css';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className='background_wrapper'>
      <div className='blur'> 
        <div className='content_wrapper'>
            <Header />
            <main>
              <Outlet /> 
            </main>
            <Footer />
        </div>
      </div> 
    </div>
  )
}
