import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { Box, ThemeProvider } from '@mui/material';
import { Link, Route, Routes } from 'react-router-dom';

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
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
