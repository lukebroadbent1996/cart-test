import React from 'react'
import './App.css';
import {Route, Routes} from 'react-router-dom'

import Home from './pages'
import CheckoutPage from './pages/checkout';

function App() {
  return (
   
      <Routes>
        <Route path='/' element={<Home/>} exact />
        <Route path='/checkout' element={<CheckoutPage/>} exact/>
      </Routes>
  );
}

export default App;
