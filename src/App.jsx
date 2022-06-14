/* eslint-disable react/jsx-max-props-per-line */
import React, { useState } from 'react';
import { Routes as ReactRouter, Route } from 'react-router-dom';
import MantineProvider from './mantine/MantineProvider';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const App = () => {
  return (
    <MantineProvider>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </ReactRouter>
    </MantineProvider>
  );
};

export default App;
