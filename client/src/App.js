import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './components/views/Main'
import SingleProduct from './components/SingleProduct';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route element={<Main/>} path="/"/>
          <Route element={<SingleProduct/>} path="/products/:id" />
          <Route element={<Update/>} path="/products/edit/:id" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
