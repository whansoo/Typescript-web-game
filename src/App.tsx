import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import GuGuDan2 from './구구단/ts_GuGuDan';
import WordRelay from './끝말잇기/ts_WordRelay';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<GuGuDan2/>}/>
       <Route path='/relay' element={<WordRelay/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
