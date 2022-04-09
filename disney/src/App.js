import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='detail' element={<Detail/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
