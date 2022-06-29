import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, ThemeProvider } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './containers/About';
import MovieList from './containers/MovieList';
import Pricing from './containers/Pricing';
import Subscribed from './containers/Subscribed';
import theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<MovieList />} />
          <Route path="about" element={<About />}>
            <Route path="description" element={<Box sx={{ mt: 10 }}>Provides movies in your hand</Box>} />
            <Route path="services" element={<Box sx={{ mt: 10 }}>Streaming movies, Indonesian film, and film review.</Box>} />
          </Route>
          <Route path="indonesian" element={<Box sx={{ mt: 10 }}>Halaman indonesian</Box>} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="subscribed/:plan" element={<Subscribed />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
