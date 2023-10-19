import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header.jsx'
import React, { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home.jsx'
import SearchResults from './components/SearchResults.jsx'

export default function App() {
  return (
    <>
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home url="http://localhost:8081/popular"/>}/>
            <Route path="/featured" element={<Home url="http://localhost:8081/featured"/>} />
            <Route path="/search/:searchText" element={<SearchResults/>} />
          </Routes>
      </div>
    </>
  )
}