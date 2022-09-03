import React, { useState } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/views/Main'
import ProductForm from './components/SingleProduct';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route element={<Main/>} path="/"/>
          <Route element={<SingleProduct/>} path="/products/:id" />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
