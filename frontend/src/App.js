import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar.js';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';

import Login from './components/Login.js';
import Pergerakan from './components/Pergerakan.js';
import Dashboard from './components/Dashboard.js';
import KAK from './components/KAK.js';
import ProgramKerja from './components/ProgramKerja.js';
import PeminjamanSarpras from './components/PeminjamanSarpras.js';
import AddDataSarpras from './components/AddDataSarpras.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>
            <Login />
          </>
        } />
        <Route path="/dashboard" element={
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Navbar />
              <Dashboard />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/kak" element={
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Navbar />
              <KAK />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/program-kerja" element={
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Navbar />
              <ProgramKerja />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/pergerakan" element={
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Navbar />
              <Pergerakan />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/peminjaman-sarpras" element={
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Navbar />
              <PeminjamanSarpras />
              <Footer />
            </div>
          </div>
        } />
        <Route path="/add-data-sarpras" element={
          <div className="wrapper">
            <Sidebar />
            <div className="main">
              <Navbar />
              <AddDataSarpras />
              <Footer />
            </div>
          </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

