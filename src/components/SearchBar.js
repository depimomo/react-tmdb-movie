import React from 'react'
import AppBar from '@mui/material/AppBar';


const SearchBar = (movies, setSearchResult) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleSearchChange = (e) => {
        if (!e.target.value) return setSearchResult(movies)

        const resultArray = movies.filter(movie => 
            movie.title.includes(e.target.value) || movie.body.includes(e.target.value))

            setSearchResult(resultArray)
    }
  return (
    <AppBar>
        <form className='search' onSubmit={handleSubmit}>
            <input className='searchInput'
            type= "search"
            id = "search"
            onChange={handleSearchChange}>

            </input>
            <button className='searchButton'
            color='black'>
            Search
            </button>
        </form>
    </AppBar>
  )
}

export default SearchBar