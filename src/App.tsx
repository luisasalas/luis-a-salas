import CssBaseline from '@mui/material/CssBaseline'
import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Home from './components/';
import Contacts from './components/Contacts';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  return (
    <>
      <CssBaseline />
      <Route path="/" element={<Home />} />
      <Route path='/resume' element={<Resume />} />
      <Route path='/portfolio'element={<Portfolio />} />
      <Route path='/contacts' element={<Contacts />} />
    </>
  );
}

export default App;
