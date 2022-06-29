import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link, Outlet } from 'react-router-dom';

const About = () => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
        }}>
            <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
                Who are we?
            </Typography>
            <Link to="description">Description</Link>
            <Link to="services">Services</Link>
            <Outlet/>
        </Box>
    )
}

export default About;