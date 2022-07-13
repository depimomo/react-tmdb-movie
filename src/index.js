import './index.css';

import { Box } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import About from './containers/About';
import Login from './containers/Login';
import MovieList from './containers/MovieList';
import NotFound from './containers/NotFound';
import Pricing from './containers/Pricing';
import Register from './containers/Register';
import Subscribed from './containers/Subscribed';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<About />}>
            <Route path="description" element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
            <Route path="services" element={<Box sx={{ mt: 10 }}>Streaming movies, Indonesian film, and film review.</Box>} />
          </Route>
          <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="subscribed/:plan" element={<Subscribed />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
