import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import AllLeads from './components/leads/AllLeads';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Lead from './components/leads/Lead';

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<AllLeads />} />
        <Route path='/lead' element={<Lead />} />
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
}

export default App;
