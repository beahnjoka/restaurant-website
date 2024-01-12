// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/home/home';
import ContactUs from './components/contacts/contacts';
import Menufile from './components/menu/menufile';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="menu" element={<Menufile/>} />
          <Route path="contact" element={<ContactUs />} />
        </Routes>
    </Router>
  );
};

export default App;
