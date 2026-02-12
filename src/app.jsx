import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Main } from './main/main.jsx';
import { Status } from './status/status.jsx';
import { Space } from './space/space.jsx';
import { About } from './about/about.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <div className="body text-light my-theme">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">
              StatusTag<sup>&reg;</sup>
            </div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="status">
                  Status
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="space">
                  Space
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>




        <Routes>
          <Route path='/' element={<Main />} exact />
          <Route path='/status' element={<Status />} />
          <Route path='/space' element={<Space />} />
          <Route path='/about' element={<About />} />
          <Route path='*' element={<NotFound />} />
        </Routes>

    
        <footer className="bg-dark text-white-50">
          <div className="container-fluid">
            <span className="text-reset">Xinlin Wang</span>
            <a className="text-reset" href="https://github.com/xinlinwang53-crypto/startup.git">
              Source
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}
