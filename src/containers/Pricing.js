import { Box, Button, TableFooter, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';

const createData = (feature, bronze, gold, platinum) => {
    return { feature, bronze, gold, platinum };
}

const rows = [
    createData('Video quality', '720p', '1080p', '4K+HDR'),
    createData('Devices', 1, 2, 4),
    createData('Skip Ads', 'No', 'Yes', 'Yes'),
    createData('Audio', 'Stereo', 'Stereo', 'Dolby 5.1'),
    createData('Offline Viewing', 'No', 'No', 'Yes'),
];

const Pricing = () => {
    let navigate = useNavigate();

    const onSubscribed = (plan) => {
        // subscription logic here
        // navigate to success page
        navigate(`/subscribed/${plan}`);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: 5,
        }}>
            <Typography component="div" variant="h4" align="center" sx={{ margin: 5 }}>
                Start Your Endless NONTON Experience Now!
            </Typography>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Plans</TableCell>
                            <TableCell align="center">
                                <Typography component="div" variant="h6">
                                    Bronze
                                </Typography>
                                Rp 99.000 / month
                            </TableCell>
                            <TableCell align="center">
                                <Typography component="div" variant="h6">
                                    Gold
                                </Typography>
                                Rp 129.000 / month
                            </TableCell>
                            <TableCell align="center">
                                <Typography component="div" variant="h6">
                                    Platinum
                                </Typography>
                                Rp 159.000 / month
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow key={row.feature}>
                                <TableCell> {row.feature} </TableCell>
                                <TableCell align="center">{row.bronze}</TableCell>
                                <TableCell align="center">{row.gold}</TableCell>
                                <TableCell align="center">{row.platinum}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">
                                <Button variant="contained" onClick={() => onSubscribed('bronze')}>
                                    Buy now
                                </Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button variant="contained" onClick={() => onSubscribed('gold')}>
                                    Buy now
                                </Button>
                            </TableCell>
                            <TableCell align="center">
                                <Button variant="contained" onClick={() => onSubscribed('platinum')}>
                                    Buy now
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableContainer>
        </Box>
    );
}

export default Pricing;