import React from 'react'
import Search from './components/Search'
import { useState, useEffect } from 'react'
import Spinner from './components/Spinner';
import MovieCard from './components/MovieCard';
import {useDebounce} from 'react-use';

const API_BASE_URL = 'https://api.themoviedb.org/3'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }
}

const App = () => {
  const [searchTerm, setsearchTerm] = useState('')

  const [errorMessage, seterrorMessage] = useState(null)

  const [movieList, setmovieList] = useState([])
  const [isLoading, setisLoading] = useState(false)

  const [debouncedSearch, setdebouncedSearch] = useState('')

  useDebounce(() => setdebouncedSearch(searchTerm), 500, [searchTerm])  //debouncing effect

  const fetchMovies = async (query = '') => {
    setisLoading(false)
    seterrorMessage('')
    try {
      const endpoint = query ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

      const response = await fetch(endpoint, API_OPTIONS)

      // alert(response);

      if (!response.ok) {
        throw new Error('Failed to fetch movies')
      }

      const data = await response.json()

      // console.log(data)
      if (data.Response === 'False') {
        seterrorMessage(data.error || 'Failed to fetch movies')
        return
      }

      setmovieList(data.results || [])
    } catch (error) {
      console.error('Error fetching movies', error)
      seterrorMessage('Error fetching movies. Please try again later')
    } finally {
      setisLoading(false)
    }
  }

  useEffect(() => {
    fetchMovies(debouncedSearch)
  }, [debouncedSearch]);

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'>
        <header>
          <img src='./hero-img.png' alt='Hero' />
          <h1>
            Find <span className='text-gradient'>Movies</span> you'll enjoy
            without the hassle
          </h1>
          <Search searchTerm={searchTerm} setsearchTerm={setsearchTerm} />
        </header>

        <section className='all-movies'>
          <h2 className='mt-[40px]'>All movies</h2>

          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map(movie => (
                <MovieCard key={movie.id} movie = {movie}/>
              ))}
            </ul>
          )}
        </section>

        {/* <p className='text-white text-3xl'>Search</p> */}
      </div>
    </main>
  )
}

export default App
