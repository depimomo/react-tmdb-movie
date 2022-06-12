import { Box, CardMedia, Rating } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import * as React from 'react';


const MovieCard = () => {
  return (
    <Card sx={{ display: 'flex', maxWidth: 350 }}>
      <CardMedia
        component="img"
        sx={{ width: 150, height: 225 }}
        image="http://placekitten.com/500"
        alt="Live from space album cover"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h6">
            Fantastic Beasts: The Secrets of Dumbledore
          </Typography>
          <Rating name="read-only" precision={0.1} value={6.8/2} max={5} readOnly />
        </CardContent>
      </Box>
    </Card>
  );
}

export default MovieCard;