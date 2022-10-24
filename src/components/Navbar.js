import { MovieFilter } from '@mui/icons-material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

import UserLog from './UserLog';

const navItems = [
  { text: 'Indonesian', link: '/indonesian' },
  { text: 'Pricing', link: '/pricing' },
  { text: 'About', link: '/about' }
];



const Navbar = (movies, setSearchResult) => {
  // const handleSubmit = (e) => e.preventDefault()
  // const handleSearchChange = (e) => {
  //   if (!e.target.value) return setSearchResult(movies)

  //   const resultArray = movies.filter(movie => 
  //   movie.title.includes(e.target.value) || movie.body.includes(e.target.value))
  //   setSearchResult(resultArray)}
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar>
        {/* <form className='search' onSubmit={handleSubmit}>
          <input className='searchInput'
          type= "search"
          id = "search"
          onChange={handleSearchChange}
          ></input>
          <button className='searchButton'
          color='black'>
          Search
          </button>
        </form> */}
        <Toolbar>
          <MovieFilter sx={{ display: 'flex', mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              display: 'block',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
            }}
          >
            <Link style={{ color: 'inherit', textDecoration: 'inherit' }} to="/">
              NONTON
            </Link>
          </Typography>
          <Box sx={{ display: 'block' }}>
            {navItems.map((item) => (
              <NavLink
                to={item.link}
                key={item.text}
                className={({ isActive }) => isActive ? 'nav-active' : 'nav-inactive'}
              >
                {item.text}
              </NavLink>
            ))}
            <UserLog />
          </Box>
        </Toolbar>
      </AppBar>
    </Box >
  );
}

export default Navbar;
