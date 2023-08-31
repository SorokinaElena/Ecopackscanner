import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PackSearchPage from './pages/PackSearchPage';
import ProducerDataFormPage from './pages/ProducerDataFormPage';
import AboutUsPage from './pages/AboutUsPage';
import { Context } from './context';
import Modal from './components/Modal';
import ProducerAccountPage from './pages/ProducerAccountPage';
import Map from './pages/Map';


function App() {

  const [modal, setModal] = useState(false);
  const [pageName, setPageName] = useState('')
  const [ userInfo, setUserInfo ] = useState({
    // companyName: '',
    // country: '',
    // adress: '',
    email: '',
    password: '',
    // userType: '',
  });

  return (
    <div className="App">
      <Context.Provider value={{modal, setModal, pageName, setPageName, userInfo, setUserInfo}}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='pack_search' element={<PackSearchPage />} />
            <Route path='producer_data_form' element={<ProducerDataFormPage />} />
            <Route path='about_us' element={<AboutUsPage />} />
            <Route path='producer_account' element={<ProducerAccountPage />} />
            {/* <Route path='map' element={<Map />} /> */}
          </Route>
        </Routes>
        <Modal />
      </Context.Provider>
    </div>
  );
}

export default App;
