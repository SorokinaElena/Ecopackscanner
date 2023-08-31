import React from 'react';
import s from './index.module.css';
import Header from '../Header';
import Footer from '../Footer';
import { Outlet } from 'react-router-dom';


export default function Layout({ page_name }) {


  return (
        <div className={s.content_wrapper}>
            <Header page_name={page_name} />
            <main>
              <Outlet /> 
            </main>
            <Footer />
        </div>
  )
}