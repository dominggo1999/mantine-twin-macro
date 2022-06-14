/* eslint-disable react/jsx-max-props-per-line */
import React from 'react';
import { MantineProvider } from '@mantine/core';
import { config } from '~/mantine/config';
import { Routes as ReactRouter, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const App = () => {
  return (
    <MantineProvider {...config}>
      <ReactRouter>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </ReactRouter>
    </MantineProvider>
  );
};

export default App;
