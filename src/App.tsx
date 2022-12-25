import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GuGuDan2 from './구구단/ts_GuGuDan';
import WordRelay from './끝말잇기/ts_WordRelay';
import NumberBaseball from './숫자야구/NumberBaseball';
import GameList from './GameList';

function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
       <Route path='/' element={<HomePage/>}/>
       <Route path='/gamelist' element={<GameList/>}/>
       <Route path='/gugudan' element={<GuGuDan2/>}/>
       <Route path='/relay' element={<WordRelay/>}/>
       <Route path='/baseball' element={<NumberBaseball/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
