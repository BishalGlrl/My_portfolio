import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import AboutMe from './Components/About';
import Contact from './Components/Contact';

function App() {
  return (
    <div className='bg-bg_color'>
      {/* Navigation bar */}
      <nav className='flex justify-end bg-bg_color p-5 mr-4'>
        <Link
          to="/"
          className='m-2 text-gray-600 font-semibold text-lg hover:text-custom-orange focus:text-gray-600  cursor-pointer'
        >
          Home
        </Link>
        <Link
          to="/about"
          className='m-2 text-gray-600 font-semibold text-lg hover:text-custom-orange focus:text-gray-600 cursor-pointer'
        >
          About Me
        </Link>
        <Link
          to="/contact"
          className='m-2 text-gray-600 font-semibold text-lg hover:text-custom-orange focus:text-gray-600 cursor-pointer'
        >
          Contact Me
        </Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
