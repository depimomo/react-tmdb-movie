import produce from 'immer';
import create from 'zustand';
import { persist } from 'zustand/middleware';

import tmdb from '../apis/tmdb';

const initialMovies = [];

const useMovieStore = create(
    persist(
        (set) => ({
            movies: initialMovies,
            moviesReady: false,
            fetchMovies: async () => {
                try {
                    const { data } = await tmdb.get("trending/movie/week");

                    set(produce((state) => {
                        state.movies = data.results;
                        state.moviesReady = true;
                    }))
                } catch (error) {
                    console.log(error);
                }
            },
            sortMovies: (type) => {
                if (type === 'asc') {
                    set(produce((state) => {
                        const sorted = [...state.movies].sort((a, b) => a.vote_average - b.vote_average);
                        state.movies = sorted;
                    }))
                }
                if (type === 'desc') {
                    set(produce((state) => {
                        const sorted = [...state.movies].sort((a, b) => b.vote_average - a.vote_average);
                        state.movies = sorted;
                    }))
                }
            }
        }),
        {
            name: 'movie-storage', // nama untuk menyimpan di storage
            getStorage: () => localStorage, // (optional) by default akan 'localStorage', bisa pakai sessionStorage, dll
        }
    )
);

// selector bisa dibuat di sini, biar bisa reusesable
export const selectMovies = (state) => state.movies;
export const selectFetchMovies = (state) => state.fetchMovies;
export const selectMoviesReady = (state) => state.moviesReady;
export const selectSortMovies = (state) => state.sortMovies;

export default useMovieStore;
