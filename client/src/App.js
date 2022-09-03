import React, { useState } from 'react'
import axios from 'axios';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/views/Main'
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route element={<Main/>} path="/" default/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
