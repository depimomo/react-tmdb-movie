import { Box } from '@mui/material';
import { useEffect, useState } from 'react';

import tmdb from '../apis/tmdb';
import MovieCard from '../components/MovieCard';

const MovieList = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const fetchedMovies = await tmdb.get("trending/movie/week");
                setMovies(fetchedMovies.data.results);
            } catch (error) {
                console.log(error);
            }
        }

        fetchMovies();
    }, []);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            mt: 5,
        }}>
            {
                movies.map(movie => (
                    <MovieCard movie={movie}></MovieCard>
                ))
            }
        </Box>
    );
}

export default MovieList;
