import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PackSearchPage from './pages/PackSearchPage';
import ProducerDataFormPage from './pages/ProducerDataFormPage';
import AboutUsPage from './pages/AboutUsPage';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='pack_search' element={<PackSearchPage />} />
          <Route path='producer_data_form' element={<ProducerDataFormPage />} />
          <Route path='about_us' element={<AboutUsPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
