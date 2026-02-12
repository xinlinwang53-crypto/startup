import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Main } from './main/main';
import { Status } from './status/status';
import { Space } from './space/space';
import { About } from './about/about';

export default function App() {
  return (
    <BrowserRouter>
      <div className="text-light my-theme">
        <header className="container-fluid">
          <nav className="navbar fixed-top navbar-dark">
            <div className="navbar-brand">
              StatusTag<sup>&reg;</sup>
            </div>
            <menu className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" href="index.html">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="status.html">
                  Status
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="space.html">
                  Space
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" href="about.html">
                  About
                </NavLink>
              </li>
            </menu>
          </nav>
        </header>

        <main>App components go here</main>


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
