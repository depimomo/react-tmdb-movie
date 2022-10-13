import { Box, Button } from '@mui/material';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieCard from '../components/MovieCard';
import useMovieStore, { selectFetchMovies, selectMovies, selectMoviesReady, selectSortMovies } from '../store/movie';

const MovieList = () => {
    const [queryParams, setQueryParams] = useSearchParams();
    const movies = useMovieStore(selectMovies);
    const fetchMovies = useMovieStore(selectFetchMovies);
    const moviesReady = useMovieStore(selectMoviesReady);
    const sortMovies = useMovieStore(selectSortMovies);

    useEffect(() => {
        fetchMovies();
    }, []);

    useEffect(() => {
        if (!moviesReady) return;

        sortMovies(queryParams.get('sort'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [queryParams, moviesReady]);

    useEffect(() => {
        const nextPage = queryParams.get('page');
        console.log(nextPage);

        //ada logic untuk ngefetch movies dengan page=2
        //ada logic untuk update statenya dengan movies berikutnya
    }, [queryParams]);

    const setSortParam = (type) => {
        queryParams.set("sort", type);
        setQueryParams(queryParams);
    }

    const setNextPage = (page) => {
        queryParams.set("page", page);
        setQueryParams(queryParams);
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            mt: 5,
        }}>
            <Box sx={{
                mt: 5,
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
            }}>
                Sort by Rating
                <Button
                    variant="contained"
                    sx={{ ml: 2 }}
                    onClick={() => setSortParam("asc")}
                >
                    Asc
                </Button>
                <Button
                    variant="contained"
                    sx={{ ml: 2, mr: 2 }}
                    onClick={() => setSortParam("desc")}
                >
                    Desc
                </Button>
            </Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
            }}>
                {
                    movies.map(movie => (
                        <MovieCard key={movie.title} movie={movie}></MovieCard>
                    ))
                }
            </Box>
            <Button
                variant="contained"
                sx={{ ml: 2, mr: 2 }}
                onClick={() => setNextPage("2")}
            >
                Load More
            </Button>
            <div>Created by orang</div>
        </Box>
    );
}

export default MovieList;
