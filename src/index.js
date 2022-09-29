import './index.css';

import { Box } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, createRoutesFromElements, Link, Route, RouterProvider } from 'react-router-dom';

import App from './App';
import About from './containers/About';
import MovieList from './containers/MovieList';
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<App/>}>
    <Route path="/" element={<MovieList />} />
    <Route path="about" element={<About />}>
      <Route path="description" element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
      <Route path="services" element={<Box sx={{ mt: 10 }}>Streaming movies, Indonesian film, and film review.</Box>} />
    </Route>
    <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} />
    <Route path="pricing" element={<Pricing />} />
    <Route path="subscribed/:plan" element={<Subscribed />} />
    <Route
      path="*"
      element={
        <Box sx={{
          display: 'flex',
          margin: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}>
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/404-error-4461124-3696774.png"
            alt="404"
          />
          <p>You have reach the edge of universe</p>
          <Link to="/">Take me home!</Link>
        </Box>
      }
    />
  </Route>));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
