import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import About from './About';
import Contact from './Contact';
import Notfound from './notfound';

const routing = (
  <Router>
    <div>
      <h1>React Router Example</h1>
      <ul>
        <li>
          <NavLink to="/" end activeStyle={{ color: 'red' }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeStyle={{ color: 'green' }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeStyle={{ color: 'magenta' }}>
            Contact
          </NavLink>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));
