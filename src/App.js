import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';
import theme from './themes/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Navbar />
        <Outlet/>
      </div>
    </ThemeProvider>
  );
}

export default App;
