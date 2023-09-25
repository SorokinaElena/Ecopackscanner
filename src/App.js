import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PackSearchPage from './pages/PackSearchPage';
import PackAddPage from './pages/PackAddPage';
import ProducerDataFormPage from './pages/ProducerDataFormPage';
import AboutUsPage from './pages/AboutUsPage';
import { Context } from './context';
// import Modal from './components/Modal';
import ModalSignUp from './components/ModalSignUp';
import ModalLogIn from './components/ModalLogIn';
import ProducerAccountPage from './pages/ProducerAccountPage';
import CustomerAccountPage from './pages/CustomerAccountPage';
import Map from './pages/Map';
import FormProducerInfo from './components/FormProducerInfo';
import PackagesList from './components/PackagesList';
import SearchResultsPage from './pages/SearchResultsPage';


function App() {

  const [modal, setModal] = useState(false);
  const [modalSignUp, setModalSignUp] = useState(false);
  const [modalLogIn, setModalLogIn] = useState(false);
  // const [user, setUser] = useState({
  //   userType: '',
  //   companyName: '',
  //   country: '',
  //   adress: '',
  //   email: '',
  //   password: '',
  // });
  const [isAuthUser, setIsAuthUser] = useState(false);
  const [authUser, setAuthUser] = useState({
    access_token: '',
    details: {
      _id: '',
      userType: '',
      companyName: '',
      country: '',
      adress: '',
      email: '',
    },
    isAdmin: false,
  });

  const [userType, setUserType] = useState(() => {
  const saved = sessionStorage.getItem('userType');
  const initialValue = JSON.parse(saved);
  return initialValue || '';
  });

  // const [pageName, setPageName] = useState('')


  return (
    <div className="App">
      <Context.Provider value={{modal, setModal, modalSignUp, setModalSignUp, modalLogIn, setModalLogIn, isAuthUser, setIsAuthUser, authUser, setAuthUser, userType, setUserType}}>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path='pack_search' element={<PackSearchPage />} />
            <Route path='pack_add' element={<PackAddPage />} />
            <Route path='producer_data_form' element={<ProducerDataFormPage />} />
            <Route path='about_us' element={<AboutUsPage />} />
            <Route path='producer_account' element={<ProducerAccountPage />} />
            <Route path='customer_account' element={<CustomerAccountPage />} />
            <Route path='producer_account/producer_info' element={<FormProducerInfo />} />
            <Route path='producer_account/packages_list' element={<PackagesList />} />
            <Route path='search_results' element={<SearchResultsPage />} />
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
