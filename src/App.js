import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PackSearchPage from './pages/PackSearchPage';
import ProducerDataFormPage from './pages/ProducerDataFormPage';
import AboutUsPage from './pages/AboutUsPage';
import { Context } from './context';
// import Modal from './components/Modal';
import ModalSignUp from './components/ModalSignUp';
import ModalLogIn from './components/ModalLogIn';
import ProducerAccountPage from './pages/ProducerAccountPage';
import Map from './pages/Map';


function App() {

  const [modal, setModal] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);

  // const [pageName, setPageName] = useState('')

  const [ user, setUser ] = useState({
    userType: '',
    companyName: '',
    country: '',
    adress: '',
    email: '',
    password: '',
  });


  return (
    <div className="App">
      <Context.Provider value={{modal, setModal, modalSignUp, setModalSignUp, modalLogIn, setModalLogIn, user, setUser }}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='pack_search' element={<PackSearchPage />} />
            <Route path='producer_data_form' element={<ProducerDataFormPage />} />
            <Route path='about_us' element={<AboutUsPage />} />
            <Route path='producer_account' element={<ProducerAccountPage />} />
            <Route path='map' element={<Map />} />
          </Route>
        </Routes>
        {/* <Modal /> */}
        <ModalSignUp />
        <ModalLogIn />
      </Context.Provider>
    </div>
  );
}

export default App;
