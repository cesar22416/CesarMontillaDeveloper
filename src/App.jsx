import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from '../components/nav/Nav';
import Home from '../components/home/Home';
import Service from '../components/service/Service';


function App() {
  return (
    <Router>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Service" element={<Service />} />
        </Routes>
    </Router>
  );
}

export default App;
