import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import GuGuDan2 from './구구단/ts_GuGuDan';
import WordRelay from './끝말잇기/ts_WordRelay';
import NumberBaseball from './숫자야구/ts_NumberBaseball';
import ResponseCheck from './반응속도체크/ts_ResponseCheck';
import RSP from './가위바위보/ts_RSP';
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
       <Route path='/response' element={<ResponseCheck/>}/>
       <Route path='/rsp' element={<RSP/>}/>
     </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
